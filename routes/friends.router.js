const express = require("express");
const friendsController = require("../controllers/friends.controller.js");

const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getFriend);
friendsRouter.post("/", friendsController.postFriends);

module.exports = friendsRouter;
