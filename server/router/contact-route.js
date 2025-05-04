const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact_controller.js");
router.route("/form").post(contactForm);
module.exports = router;
