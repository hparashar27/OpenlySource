const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
  startingMonth: {
    type: Date,
  },
  description: {
    type: String,
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
