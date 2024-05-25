const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  let username;
  try {
    username = req.body.username;
  } catch (e) {
    return res.json({ message: e });
  }
  
  if (!username) return res.json({ message:  "User not found, please insert the username "});

  const token = jwt.sign(username, "server-password",);
  return res.json({ message: `Username: ${username} ${token}`});
};


exports.register = register;
