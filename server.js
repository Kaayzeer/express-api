const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Isaac Newton",
  },
];

app.use((req, res, next) => {
  const start = Date.now();

  next();
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const friendId = Number(req.params.id);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.post("/friends", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  console.log("friends.length", friends);

  friends.push(newFriend);
  res.json(newFriend);
});

app.listen(PORT, () => {
  console.log("Listening on port 3000...");
});
