const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { getJson } = require("serpapi");

// Function to create a new user
exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      ...req.body,
      password: hashedPassword
    });

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userDataToUpdate = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, userDataToUpdate, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to get a user by ID
exports.getUserById = async (id) => {
  return User.findById(id)
};

exports.getSerp = async (req, res) => {
  try {
    const { query } = req.body; // Extract the query from the request body
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    // Define the search parameters
    const searchParams = {
      engine: "google",
      q: query, // Use the query parameter here
      location: "Austin, TX, Texas, United States",
      api_key: "fa0de337384424b7daf2b133321d95486698bee24d84a18b33b0fe6c3a88b44f"
    };

    getJson(searchParams, (json) => {
      console.log(json, typeof(json));
      res.status(200).json(json);
    });
  } catch (error) {
    console.error('Error processing SERP:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};





