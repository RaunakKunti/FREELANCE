const User = require("../models/user_model.js");
//user Update logic
const updateById = async (req, res) => {
  try {
    const id = req.params.id;
    //data from client side
    const data = req.body;

    //find user by id and update data
    const updatedUser = await User.updateOne({ _id: id }, { $set: data });
    //check if user is found or not
    if (updatedUser.matchedCount === 0) {
      return res.status(404).json({ message: "user not found" });
    }
    //check if user is updated or not
    if (updatedUser.modifiedCount === 0) {
      return res.status(400).json({ message: "user not updated" });
    }
    return res.status(200).json({ message: "user updated successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = updateById;
