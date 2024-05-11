const Joi = require("@hapi/joi");

module.exports.signup = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(50).required(),
});
module.exports.login = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(50).required(),
});
