// controllers/applicationController.js

const Application = require('../models/Application');
const User = require('../models/User');

// Controller to create a new application
exports.createApplication = async (req, res) => {
    try {
      const { jobId, userId, additionalDoc } = req.body;
  
      // Check if an application with the same job ID and user ID already exists
      const existingApplication = await Application.findOne({ jobId, userId });
  
      if (existingApplication) {
        return res.status(400).json({ message: 'Application already exists for this job and user' });
      }
  
      // Create a new application if no duplicate exists
      const application = await Application.create({
        jobId,
        userId,
        additionalDoc
      });
  
      res.status(201).json(application);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

// Controller to delete an application by ID
exports.deleteApplication = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const deletedApplication = await Application.findByIdAndDelete(applicationId);

    if (!deletedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to update an application by ID
exports.updateApplication = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const applicationDataToUpdate = req.body;

    const updatedApplication = await Application.findByIdAndUpdate(applicationId, applicationDataToUpdate, { new: true });

    if (!updatedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get applications of a specific user
exports.getApplicationsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const applications = await Application.find({ userId });

    res.status(200).json(applications);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUsersByJob = async (req, res) => {
    try {
        const jobId = req.params.jobId;
        const applications = await Application.find({ jobId }).populate('userId');

        const users = applications.map(application => application.userId);

        // Populate the user objects
        const populatedUsers = await User.populate(users, { path: 'userId' });

        // Filter out null user objects
        const filteredUsers = populatedUsers.filter(user => user !== null);

        res.status(200).json(filteredUsers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


  exports.getAllApplications = async (req, res) => {
    try {
      const applications = await Application.find();
      res.status(200).json(applications);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
