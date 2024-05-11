const bcrypt = require("bcrypt");
const User = require("../database/models/userModel");
const jwt = require("jsonwebtoken");

const { formateMongoData } = require("../helper/dbHelper");
const constants = require("../constants");

module.exports.signUp = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error(constants.userMessage.DUPLICATE_EMAIL);
    }
    password = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password });
    let result = await newUser.save();
    return formateMongoData(result);
  } catch (error) {
    console.log("Something went wrong inside the user service: signUp");
    throw new Error(error);
  }
};
module.exports.login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(constants.userMessage.USER_NOT_FOUND);
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error(constants.userMessage.INVALID_PASSWORD);
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: process.env.TOKEN_EXPIRE,
    });
    return { token };
  } catch (error) {
    console.log("Something went wrong inside the user service: login");
    throw new Error(error);
  }
};
