const Contact = require("../models/contact_model.js");

const getAllContacts = async (req, res) => {
  try {
    const contactData = await Contact.find();
    if (!contactData || contactData.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }
    return res.status(200).json(contactData);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContacts;
