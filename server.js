const express = require("express");
const messagesController = require("./controllers/messages.controller.js");
const friendsController = require("./controllers/friends.controller.js");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();

  next();
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

app.get("/friends", friendsController.getFriends);
app.get("/friends/:id", friendsController.getFriend);
app.post("/friends", friendsController.postFriends);

app.listen(PORT, () => {
  console.log("Listening on port 3000...");
});
