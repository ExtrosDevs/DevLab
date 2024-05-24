const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3000;
app.use(express.json());

const user = {
  username: "admin",
  password: "admin",
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get("/data", authenticateToken, (req, res) => {
  res.send({ message: "Here is your dummy data!", user: req.user.username });
});

app.post("/login", (req, res) => {
  const token = jwt.sign({ username: req.body.username }, "secret", {
    expiresIn: "20m",
  });

  res.json({ token: token });
});

// console.log(token);
