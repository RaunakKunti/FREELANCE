const User = require("../models/user_model.js");
//user delete logic
const deleteUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.deleteOne({ _id: id });
    if (!deleteUser) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(201).json({ message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteUserByID;
