const express = require("express");
const router = express.Router();
const service = require("../controllers/service_controller.js");

router.route("/services").get(service);
module.exports = router;
