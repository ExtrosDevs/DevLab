const jwt = require("jsonwebtoken");
const users = [];
const register = async (req, res) => {
  let username;
  let password;
  try {
    username = req.body.username;
    password = req.body.password;
  } catch (e) {
    return res.json({ message: e });
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      return res.json({ message: "Username already exists" });
    }
  }
  users.push({ username, password });
  if (!username)
    return res.json({ message: "User not found, please insert the username " });

  return res.json({
    message: `Username: ${username} has been registered, go to login`,
  });
};
const login = async (req, res) => {
  let username;
  let password;
  try {
    username = req.body.username;
    password = req.body.password;
  } catch (e) {
    return res.json({ message: e });
  }

  if (!username)
    return res.json({ message: "User not found, please insert the username " });

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      const token = jwt.sign(users[i], "server-password");
      return res.json({ message: "Login success", token: token });
    }
  }

  return res.json({ message: "Login failed" });
};

exports.register = register;
exports.login = login;
