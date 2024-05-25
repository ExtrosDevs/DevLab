const jwt = require("jsonwebtoken");

const products = ["Smast TV", "Mobile Phone"];

const getData = async (req, res) => {
  let token;
  let username;

  try {
    username = req.body.username;
    token = req.body.token;
  } catch (e) {
    return res.json({
      message: "please enter the username, (insert the token)",
    });
  }
  let isAuthenticate;
  console.log(token)
  try {
    isAuthenticate = jwt.verify(token, "server-password");
  } catch (e) {
    console.log("Connt verify "+ e);
  }
  if (isAuthenticate) {
    return res.json({ products: products });
  }
  return res.json({ mssage: "You are not authenticate" });
};

exports.getData = getData;
