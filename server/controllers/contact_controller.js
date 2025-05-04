const Contact = require("../models/contact_model.js");

const form = async (req, res) => {
  try {
    const data = req.body;
    const formData = await Contact.create(data);
    if (formData) {
      return res.status(201).json({
        message: "message send successfully",
      });
    }
  } catch (error) {
    return res.status(401).json({
      msg: "Something went wrong while sendding message",
    });
  }
};

module.exports = form;
