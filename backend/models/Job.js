// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter', required: true },
  recruiterName: { type: String, required: true }, // New field for recruiter's name
  skillsReqd: [{ type: String }],
  location: { type: String, required: true },
  jobDescription: { type: String, required: true },
  dateOfPosting: { type: Date, default: Date.now },
  deadline: { type: Date },
  duration: { type: String },
  salary: { type: String },
  companyName: { type: String, required: true }
});

module.exports = mongoose.model('Job', jobSchema);
