const opportunitiesRouter = require("express").Router();
const opportunitiesController = require("../../controllers/Opportunities/opportunities");
const celebrate = require("celebrate").celebrate;

const validtor = require("./validations");

opportunitiesRouter.get("/events", opportunitiesController.getEvents);
opportunitiesRouter.post(
  "/events",
  celebrate(validtor.addEvent),
  opportunitiesController.addEvent,
);
opportunitiesRouter.put('/event/:id', opportunitiesController.updateEvent)
opportunitiesRouter.delete('/event/:id', opportunitiesController.deleteEvent)
module.exports = opportunitiesRouter;
