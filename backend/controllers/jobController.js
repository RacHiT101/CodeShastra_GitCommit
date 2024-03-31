// controllers/jobController.js
const Job = require('../models/Job');
const Recruiter = require('../models/Recruiter');

// Create a single job
exports.createJob = async (req, res) => {
  try {
    console.log(req.body);
    const job = await Job.create(req.body);
    // Add the created job's ID to the recruiter's createdJobs array
    await Recruiter.findByIdAndUpdate(
      job.recruiter,
      { $push: { createdJobs: job._id } },
      { new: true }
    );
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
    // Add the created jobs' IDs to the respective recruiter's createdJobs array
    for (const job of createdJobs) {
      await Recruiter.findByIdAndUpdate(
        job.recruiter,
        { $push: { createdJobs: job._id } },
        { new: true }
      );
    }
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
