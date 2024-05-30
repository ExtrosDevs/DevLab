const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    let token;
    let username;

    try {   
        username = req.body.username;
        token = req.headers['authorization'];
    } catch (e) {   
        return res.json({ message: e });
    }
    let isAuthenticate;
    console.log(token)
    try {
        isAuthenticate = jwt.verify(token, "server-password");
    } catch (e) {
        console.log("Connt verify "+ e);    
    }
    if (isAuthenticate) {
        return next();
    }
    return res.json({ mssage: "You are not authenticate" });
}



exports.auth =  auth