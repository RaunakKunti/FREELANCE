const User = require("../models/user_model.js");
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}, { password: 0 });
    if (!allUsers || allUsers.length === 0) {
      return res.status(404).json({ message: "No users found" });
    } else {
      return res.status(200).json(allUsers);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getAllUsers;
