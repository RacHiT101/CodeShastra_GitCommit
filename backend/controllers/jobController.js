// controllers/jobController.js
const Job = require('../models/Job');

// Create a single job
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ job });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create multiple jobs
exports.createMultipleJobs = async (req, res) => {
  try {
    const { jobs } = req.body;
    const createdJobs = await Job.create(jobs);
    res.status(201).json({ jobs: createdJobs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
