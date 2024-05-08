const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB is Connected");
  } catch (error) {
    console.log("DB Connect ERROR", error);
    throw new Error(error);
  }
};
