module.exports = {
  defaultServerResponse: {
    status: 400,
    message: "",
    body: {},
  },
  productMessage: {
    PRODUCT_CREATED: "Product created Successfully",
    PRODUCT_FETCHED: "Product fetched Successfully",
    PRODUCT_NOT_FOUND: "Product not found",
    PRODUCT_UPDATED: "Product Updated Successfully",
    PRODUCT_DELETED: "Product deleted Successfully",
  },
  userMessage: {
    SIGNUP_SUCCESS: "User Signup Successfully",
    LOGIN_SUCCESS: "Login Successful",
    USER_NOT_FOUND: "User not Found",
    INVALID_PASSWORD: "Incorrect Password",
    DUPLICATE_EMAIL: "User is Already Exist",
  },
  requestValidationMessage: {
    BAD_REQUEST: "Invalid Fields",
    TOKEN_MISSING: "Token is missing",
  },

  dataBaseMessage: {
    INVALID_ID: "Invalid ID",
  },
};
