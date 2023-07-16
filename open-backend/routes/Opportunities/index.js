const opportunitiesRouter = require("express").Router();
const opportunitiesController = require("../../controllers/Opportunities/opportunities");

opportunitiesRouter.get("/events", opportunitiesController.getEvents);
opportunitiesRouter.post(
  "/events",
  opportunitiesController.addEvent,
);
opportunitiesRouter.put('/event/:id', opportunitiesController.updateEvent)
opportunitiesRouter.delete('/event/:id', opportunitiesController.deleteEvent)
module.exports = opportunitiesRouter;
