const express = require("express");
const router = express.Router();
const {
  home,
  register,
  login,
  user,
} = require("../controllers/auth_controller.js");
const validate = require("../validate_middleware/validate-schema.js");
const {
  signupValidator,
  loginValidator,
} = require("../zod_validator/signup-validate.js");
const authmiddleware = require("../validate_middleware/auth-middleware.js");

// router.route("/").get((req, res) => {
//   res.send("dashboard");
// });

router.route("/").get(home);

// router.route("/register").get((req, res) => {
//   res.send("register page");
// });

router.route("/register").post(validate(signupValidator), register);
router.route("/login").post(validate(loginValidator), login);
router.route("/user").get(authmiddleware, user);

module.exports = router;
