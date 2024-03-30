// controllers/recruiterController.js
const Recruiter = require('../models/Recruiter');

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
