const Contact = require("../models/contact_model.js");
//user contact data logic
const deleteContactByID = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteContact = await Contact.deleteOne({ _id: id });
    if (!deleteContact) {
      return res.status(404).json({ message: "data not found" });
    }
    return res.status(201).json({ message: "data deleted successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteContactByID;
