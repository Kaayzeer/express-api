const model = require("../models/friends.model");
console.log("model", model);

function postFriends(req, res) {
  console.log("name", req.body.name);

  if (!req.body.name) {
    res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  console.log("friends.length", model);

  model.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = Number(req.params.id);
  const friend = model[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

module.exports = {
  postFriends,
  getFriend,
  getFriends,
};
