// models/Recruiter.js
const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  contact: { type: String },
  reviews: { type: String },
  companyName: { type: String }
});

module.exports = mongoose.model('Recruiter', recruiterSchema);
