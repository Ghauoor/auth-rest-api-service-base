const Product = require("../database/models/productModel");
const { formateMongoData, checkObjectId } = require("../helper/dbHelper");

const constants = require("../constants");

module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({
      ...serviceData,
    });
    const result = await product.save();
    return formateMongoData(result);
  } catch (error) {
    console.log("Something went wrong inside the product service");
    throw new Error(error);
  }
};
module.exports.getAllProduct = async ({ skip = 0, limit = 10 }) => {
  try {
    let products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formateMongoData(products);
  } catch (error) {
    console.log("Something went wrong inside the getAllProduct");
    throw new Error(error);
  }
};
module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    let products = await Product.findById(id);

    if (!products) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(products);
  } catch (error) {
    console.log("Something went wrong inside the getAllProduct");
    throw new Error(error);
  }
};
module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let products = await Product.findOneAndUpdate(
      {
        _id: id,
      },
      updateInfo,
      { new: true }
    );
    if (!products) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(products);
  } catch (error) {
    console.log("Something went wrong inside the updateProduct");
    throw new Error(error);
  }
};
module.exports.deleteProduct = async ({ id }) => {
  try {
    checkObjectId(id);
    let products = await Product.findByIdAndDelete(id);
    if (!products) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(products);
  } catch (error) {
    console.log("Something went wrong inside the deleteProduct");
    throw new Error(error);
  }
};
