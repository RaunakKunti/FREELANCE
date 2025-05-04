const { Schema, model } = require("mongoose");

const contactform = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = new model("Contact", contactform);
module.exports = Contact;
