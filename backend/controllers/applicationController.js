// controllers/applicationController.js
const Application = require('../models/Application');

// Controller to create a new application
exports.createApplication = async (req, res) => {
  try {
    const { jobId, userId, additionalDoc } = req.body;

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


