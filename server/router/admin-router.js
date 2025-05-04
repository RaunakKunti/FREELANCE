const express = require("express");
const router = express.Router();
const getAllUsers = require("../controllers/admin-controller.js");
const getAllContacts = require("../controllers/admin-controller-contact.js");
const authorization = require("../validate_middleware/auth-middleware.js");
const adminMiddleware = require("../validate_middleware/admin-middleware.js");
const deleteUserByID = require("../controllers/admin-controller-delete.js");
const findById = require("../controllers/admin-controller-update.js");
const updateById = require("../controllers/admin-controller-userupdate.js");
const deleteContactByID = require("../controllers/admin-controller-contact-delete.js");

//show all users
router.route("/users").get(authorization, adminMiddleware, getAllUsers);
//show contact us
router.route("/contacts").get(authorization, adminMiddleware, getAllContacts);
//route for get single user data
router.route("/users/edit/:id").get(authorization, adminMiddleware, findById);
//route for update user data
router
  .route("/users/update/:id")
  .put(authorization, adminMiddleware, updateById);
//route for delete user
router
  .route("/users/delete/:id")
  .delete(authorization, adminMiddleware, deleteUserByID);

//get all contact data from frontend
router
  .route("/users/contact")
  .get(authorization, adminMiddleware, getAllContacts);
//delete contact data from frontend
router
  .route("/users/contact/delete/:id")
  .delete(authorization, adminMiddleware, deleteContactByID);

module.exports = router;
