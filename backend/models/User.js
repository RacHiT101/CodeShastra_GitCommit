// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  name: { type: String, required: true },
  skills: [{ type: String }],
  resumeLink: { type: String },
  about: { type: String },
  location: { type: String },
  degree: { type: String },
  course: { type: String },
  contact: { type: String }
});

module.exports = mongoose.model('User', userSchema);
