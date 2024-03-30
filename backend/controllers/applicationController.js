// controllers/applicationController.js

const Application = require('../models/Application');
// const User = require('../controllers/userController');
const User = require('../models/User'); 
const User1 = require('../models/Recruiter'); 
const Conversation = require('../models/Conversation');



// Controller to create a new application
exports.createApplication = async (req, res) => {
  try {
    const { jobId, userId, recruiterId, additionalDoc } = req.body;

    const application = await Application.create({
      jobId,
      userId,
      recruiterId,
      additionalDoc
    });

    const user = await User.findById(userId);
    console.log(user);
    const recruiter = await User1.findById(recruiterId);
    console.log(recruiter);

    let id1 = recruiterId;
    let username1 = recruiter.name || "";
    const id2 = userId;
    let username2 = user.name || "";

    // if (id1 > id2) {
    //   id2 = [id1, (id1 = id2)][0];
    //   username2 = [username1, (username1 = username2)][0];
    // }

    let existingConversation = await Conversation.findOne({
      $or: [
        { $and: [{ firstId: userId }, { secondId: recruiterId }] },
        { $and: [{ firstId: recruiterId }, { secondId: userId }] }
      ]
    });

    if (!existingConversation) {
      // If conversation doesn't exist, create a new one
      const user = await User.findById(userId);
      const recruiter = await User1.findById(recruiterId);

      const id1 = recruiterId;
      const username1 = recruiter.name || '';
      const id2 = userId;
      const username2 = user.name || '';

      const currentTime = Date.now();
      const welcomeMessage =
        'Welcome to my chat app. To start a new conversation, please use the search bar to search for other people and click on them. If you have any question, please reply to this conversation. Developed by Viet Thanh';

      existingConversation = await Conversation.create({
        firstId: id1,
        secondId: id2,
        firstUserName: username1,
        secondUserName: username2,
        messages: [
          {
            content: welcomeMessage,
            ofUser: recruiterId,
            time: currentTime
          }
        ],
        lastUpdate: currentTime,
        lastSender: recruiter.name,
        lastMessage: welcomeMessage
      });
    }

    res.status(201).json({ conversation: existingConversation, application });
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

exports.getApplicationsByUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const applications = await Application.find({ userId }).populate('jobId');
  
      res.status(200).json(applications);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

exports.getUsersByJob = async (req, res) => {
    try {
        const jobId = req.params.jobId;
        const applications = await Application.find({ jobId }).populate('userId');

        const users = applications.map(application => application.userId);

        // Populate the user objects
        const populatedUsers = await User.populate(users, { path: 'userId' });

        // Filter out null user objects
        const filteredUsers = populatedUsers.filter(user => user !== null);

        res.status(200).json(filteredUsers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


  exports.getAllApplications = async (req, res) => {
    try {
      const applications = await Application.find();
      res.status(200).json(applications);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
