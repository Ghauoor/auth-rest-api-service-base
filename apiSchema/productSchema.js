const Joi = require("@hapi/joi");

module.exports.createProductSchema = Joi.object().keys({
  name: Joi.string().min(3).max(255).required(),
  price: Joi.number().min(3).required(),
  brand: Joi.string().min(3).max(255).required(),
});

module.exports.getAllProductsSchema = Joi.object().keys({
  skip: Joi.string(),
  limit: Joi.string(),
});
module.exports.updateProductSchema = Joi.object().keys({
  name: Joi.string(),
  price: Joi.number(),
  brand: Joi.string(),
});
