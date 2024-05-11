const constants = require("../constants");
const userService = require("../service/userService");

module.exports.signUp = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await userService.signUp(req.body);
    response.status = 201;
    response.message = constants.userMessage.SIGNUP_SUCCESS;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: createProductController", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
