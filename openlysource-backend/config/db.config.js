const mongoose = require("mongoose");
const { logger } = require("../logger");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://hparashar27:V1zlI5sJbNXurb4D@cluster0.phoxcof.mongodb.net/test?retryWrites=true&w=majority", {
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
