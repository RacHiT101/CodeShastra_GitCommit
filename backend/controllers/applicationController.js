// controllers/applicationController.js
const Application = require('../models/Application');

exports.createApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json({ application });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
