const User = require("../models/user_model.js");
//user delete logic
const updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const getUserData = await User.findOne({ _id: id }, { password: 0 });
    // if (!getUserData) {
    //   return res.status(404).json({ message: "user not found" });
    // }
    return res.status(201).json(getUserData);
  } catch (error) {
    next(error);
  }
};
module.exports = updateById;
