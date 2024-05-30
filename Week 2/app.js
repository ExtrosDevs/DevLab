const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3000;
const dataRoutes = require("./routes/dataRoutes");

app.use(express.json());
app.use("/", dataRoutes);

const user = {
  username: "admin",
  password: "admin",
};

app.post("/login", (req, res) => {
  if (
    req.body.username === user.username &&
    req.body.password === user.password
  ) {
    const token = jwt.sign({ username: req.body.username }, "secret", {
      expiresIn: "20m",
    });

    res.json({ token: token });
  } else {
    res.sendStatus(401);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
