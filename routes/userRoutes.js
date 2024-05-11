const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

const joiSchemaValidation = require("../middleware/joiSchemaValidation.js");
const userSchema = require("../apiSchema/userSchema.js");

router.post(
  "/signup",
  joiSchemaValidation.validateBody(userSchema.signup),
  userController.signUp
);

module.exports = router;
