const User = require("../models/User");
const Conversation = require("../models/Conversation");

exports.findPeople = async (req, res) => {
  let { s } = req.query; // Use let instead of const
  if (s === undefined) s = "";
  const result = await User.find({ name: new RegExp(s, "i") })
    .select("-password")
    .lean()
    .catch((err) =>
      res.status(500).json({ message: "Server error when searching user" })
    );
  return res.status(200).json({ result: result });
};

exports.getConversation = async (req, res) => {
  console.log("hiii");
  let { id1, id2 } = req.query;
  if (!id1 || !id2) res.status(404).json({ message: "No userId found" });
  if (id1 > id2) id2 = [id1, (id1 = id2)][0];
  const cvs = await Conversation.findOne({
    $or: [
      { firstId: id1, secondId: id2 },
      { firstId: id2, secondId: id1 },
    ],
  }).lean();
  console.log(cvs);

  if (cvs) return res.status(200).json({ conversation: cvs });
  const firstUser = await User.findById(id1).lean();
  const secondUser = await User.findById(id2).lean();
  console.log(secondUser);
  const newCvs = Conversation({
    firstId: id1,
    secondId: id2,
    firstUserName: firstUser?.name || "Rachit",
    secondUserName: secondUser.name,
  });
  newCvs.save((err, conversation) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: "Server error when creating new conversation" });
    }
    return res.status(200).json({ conversation: conversation.toObject() });
  });
};

exports.getConversationList = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(404).json({ message: "No user found" });
  const listConversation = await Conversation.find({
    $or: [{ firstId: id }, { secondId: id }],
    $and: [{ lastMessage: { $ne: "" } }],
  })
    .select("-messages")
    .sort({ lastUpdate: -1 })
    .lean();
  if (listConversation) return res.status(200).json({ list: listConversation });
  return res.status(200).json({ list: [] });
};

exports.getMessages = async (req, res) => {
  const { cid } = req.query;
  if (!cid) return res.status(400).json({ message: "Missing conversation id" });
  const conversation = await Conversation.findById(cid)
    .select("messages")
    .lean();

  if (!conversation)
    res.status(404).json({ message: "Cannot find conversation" });
  return res.status(200).json({ messageList: conversation.messages });
};

exports.sendMessage = async (req, res) => {
  try {
    const { cid, content, uid, name } = req.body;
    if (!cid || !content || !uid)
      return res.status(400).json({ message: "Missing some data" });

    // Find the conversation by its ID
    const conversation = await Conversation.findById(cid);
    if (!conversation)
      return res.status(404).json({ message: "Cannot find conversation" });

    // Update conversation details
    const currentTime = Date.now();
    conversation.messages.push({
      ofUser: uid,
      content: content,
      time: currentTime,
    });
    conversation.lastMessage = content;
    conversation.lastSender = name;
    conversation.lastUpdate = currentTime;

    // Save the updated conversation
    const savedConversation = await conversation.save();

    // Extract the new message from the saved conversation
    const newMessage =
      savedConversation.messages[savedConversation.messages.length - 1];

    // Respond with success message and updated conversation details
    res.status(200).json({
      message: "Add new message successfully",
      newMessage: newMessage,
      conversation: savedConversation.toObject(),
    });
  } catch (error) {
    // Handle errors
    console.log(error);
    res.status(500).json({ message: "Server error when adding new message" });
  }
};

exports.getUsersWithConversations = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res
        .status(400)
        .json({ message: "Missing user ID in request body" });
    }

    // Find all conversations where the given user ID appears in either firstId or secondId
    const conversations = await Conversation.find({
      $or: [{ firstId: userId }, { secondId: userId }],
    });

    // Extract unique user IDs from conversations
    const userIDs = new Set();
    conversations.forEach((conversation) => {
      userIDs.add(conversation.firstId.toString());
      userIDs.add(conversation.secondId.toString());
    });

    // Convert the set of user IDs to an array
    const uniqueUserIDs = Array.from(userIDs);

    // Query the User model to get user details
    const users = await User.find({ _id: { $in: uniqueUserIDs } });

    return res.status(200).json({ users: users });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error when fetching users with conversations" });
  }
};
