const { Event } = require("../../models");

const getEvents = async () => {
  const events = await Event.find({});
  return events;
};

module.exports = {
  getEvents,
};
