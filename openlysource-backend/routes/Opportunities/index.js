const opportunitiesRouter = require("express").Router();
const opportunitiesController = require("../../controllers/Opportunities/opportunities");

opportunitiesRouter.get("/events", opportunitiesController.getEvents);

module.exports = opportunitiesRouter;
