const opportunitiesRouter = require("express").Router();
const opportunitiesController = require("../../controllers/Opportunities/opportunities");

opportunitiesRouter.get("/opportunities", opportunitiesController.getOpportunities);

module.exports = opportunitiesRouter;
