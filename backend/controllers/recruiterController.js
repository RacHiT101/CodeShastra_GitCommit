// controllers/recruiterController.js
const Recruiter = require('../models/Recruiter');
const Job = require('../models/Job');

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

exports.getJobsByRecruiter = async (req, res) => {
    try {
      const { id } = req.params;
      const jobs = await Job.find({ recruiter: id });
      res.status(200).json({ jobs });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Function to get a recruiter by ID
exports.getRecruiterById = async (id) => {
 return Recruiter.findById(id)
};

exports.getRecruiterByIdnew = async (req, res) => {
  const { id } = req.params;
  
  try {
      const recruiter = await Recruiter.findById(id);
      if (!recruiter) {
          return res.status(404).json({ error: "Recruiter not found" });
      }
      res.json(recruiter);
  } catch (error) {
      console.error("Error fetching recruiter:", error);
      res.status(500).json({ error: "Internal server error" });
  }
};
   

