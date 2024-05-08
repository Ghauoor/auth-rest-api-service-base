const productService = require("../service/productService");

const constants = require("../constants");

module.exports.createProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.createProduct(req.body);
    response.status = 201;
    response.message = constants.productMessage.PRODUCT_CREATED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: createProductController", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.getAllProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.getAllProduct(req.query);
    response.status = 201;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: getAllProduct", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
module.exports.getProductById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.getProductById(req.params);
    response.status = 201;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: getProductById", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
module.exports.updateProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.updateProduct({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.status = 201;
    response.message = constants.productMessage.PRODUCT_UPDATED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: updateProduct", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
module.exports.deleteProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.deleteProduct(req.params);
    response.status = 201;
    response.message = constants.productMessage.PRODUCT_DELETED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: deleteProduct", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
