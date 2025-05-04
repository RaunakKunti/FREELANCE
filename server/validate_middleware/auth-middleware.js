//verify jwt token
const jwt = require("jsonwebtoken");
const User = require("../models/user_model.js");

const authmiddleware = async (req, res, next) => {
  const token = req.header("Authorization"); // get token from header
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  //Assuming the token is in the format "Bearer " format so we need to trim it

  const jwtToken = token.replace("Bearer ", "").trim(); // remove "Bearer " from token
  try {
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY); // verify token

    const userData = await User.findById(decoded.userId).select({
      password: 0,
    }); // find user by id
    if (!userData) return res.status(401).json({ msg: "User not found" });
    console.log(userData);
    req.user = userData; // set user data to request object
    req.token = token; // set token to request object
    req.userId = userData._id; // set user id to request object

    next(); // call next middleware
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authmiddleware;
