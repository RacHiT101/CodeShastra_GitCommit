// controllers/jobController.js
const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ job });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
