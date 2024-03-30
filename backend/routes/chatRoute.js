const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chatController");

router.get("/chats/search", chatController.findPeople);
router.get("/chats/conversation", chatController.getConversation);
router.get("/chats/get-messages", chatController.getMessages);
router.get(
  "/chats/conversation-list",

  chatController.getConversationList
);
router.post("/chats/send-message", chatController.sendMessage);

module.exports = router;
