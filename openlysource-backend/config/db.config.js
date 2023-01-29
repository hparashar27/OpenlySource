const mongoose = require("mongoose");
const { logger } = require("../logger");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/openlysource", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("MongoDB connected...");
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
