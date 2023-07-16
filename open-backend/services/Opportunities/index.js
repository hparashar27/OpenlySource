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

const updateEvent = async (body, id) => {
  const update = await Event.findByIdAndUpdate(id, body);
  return update
}
const deleteEvent = async (id) => {
  const deleteEvt = await Event.findByIdAndDelete(id);
  return deleteEvt
}
module.exports = {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent
};
