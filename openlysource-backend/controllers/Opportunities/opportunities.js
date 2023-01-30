const opportunitiesServices = require("../../services/Opportunities");
const { successResponse, serverErrorResponse } = require("../../utils/response.utils");

const getEvents = async (req, res, next) => {
  try {
    const responseData = await opportunitiesServices.getEvents();

    successResponse(res, responseData);
    return;
  } catch (error) {
    next(error);
  }
};

const addEvent = async (req, res, next) => {
  try {
    const { months, description, eventName, logo, websiteUrl } = req.body;

    let event = await opportunitiesServices.addEvent(
      months,
      description,
      eventName,
      logo,
      websiteUrl,
    );

    if (!event) {
      serverErrorResponse(res);
      return;
    }

    event = {
      months: event.months,
      description: event.description,
      logo: event.logo,
      websiteUrl: event.websiteUrl,
      eventName: event.eventName,
    };

    successResponse(res, event);
    return;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEvents,
  addEvent,
};
