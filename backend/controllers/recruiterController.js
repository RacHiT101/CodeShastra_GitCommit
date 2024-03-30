// controllers/recruiterController.js
const Recruiter = require('../models/Recruiter');
const Job = require('../models/Job');

exports.createRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.create(req.body);
    res.status(201).json({ recruiter });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createMultipleRecruiters = async (req, res) => {
    try {
      const  recruiters  = req.body;
      const createdRecruiters = [];
      
      // Iterate over each recruiter in the array
      await Promise.all(recruiters.map(async (recruiter) => {
        const createdRecruiter = await Recruiter.create(recruiter);
        createdRecruiters.push(createdRecruiter);
      }));
      
      res.status(201).json({ recruiters: createdRecruiters });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

exports.getAllRecruiters = async (req, res) => {
  try {
    const recruiters = await Recruiter.find();
    res.status(200).json({ recruiters });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getJobsByRecruiter = async (req, res) => {
    try {
      const { recruiterId } = req.params;
      const jobs = await Job.find({ recruiter: recruiterId });
      res.status(200).json({ jobs });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Function to get a recruiter by ID
exports.getRecruiterById = async (id) => {
 return Recruiter.findById(id)
};

exports.getRecruiterByIdnew = async (req,res) => {
    const { id } = req.params;
    return Recruiter.findById(id)
   };
   
// Function to verify recruiter login credentials
exports.recruiterLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the recruiter by email
    const recruiter = await Recruiter.findOne({ email });

    // Check if recruiter with the provided email exists
    if (!recruiter) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    // Check if the password matches
    if (recruiter.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If email and password are correct, return the recruiter object
    res.status(200).json({ recruiter });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
