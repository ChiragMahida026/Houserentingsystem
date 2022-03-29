const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "NO token,authorization denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // @ts-ignore
    console.log(decoded.login_user.usertype);
    // @ts-ignore

    req.id = decoded.login_user.id;
    // @ts-ignore
    req.usertype = decoded.login_user.usertype;
    console.log(req.usertype);
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
