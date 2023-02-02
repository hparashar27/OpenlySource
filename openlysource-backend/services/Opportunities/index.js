const { Event } = require("../../models");

const getEvents = async () => {
  const events = await Event.find({});
  return events;
};

const addEvent = async (months, description, eventName, logo, websiteUrl) => {
  const newEvent = await Event.create({
    months,
    description,
    eventName,
    logo,
    websiteUrl,
  });

  return newEvent;
};

module.exports = {
  getEvents,
  addEvent,
};
