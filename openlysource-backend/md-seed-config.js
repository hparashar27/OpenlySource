const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const Event = require("./seeders/events.seeder");

const mongoURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/openlysource";

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
exports.seedersList = { Event };
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
exports.connect = async () => await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
exports.dropdb = async () => mongoose.connection.db.dropDatabase();
