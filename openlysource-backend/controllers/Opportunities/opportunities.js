const opportunitiesServices = require("../../services/Opportunities");
const { successResponse, notFoundResponse, serverErrorResponse } = require("../../utils/response.utils");

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

const updateEvent = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) {
      notFoundResponse(res)
    }
    let event = await opportunitiesServices.updateEvent(req.body, id)
    if (!event) {
      serverErrorResponse(res);
      return;
    }
    successResponse(res, { Message: "Event Updated successfully" });
  } catch (error) {
    next(error)
  }
}
const deleteEvent = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) {
      notFoundResponse(res)
    }
    let event = await opportunitiesServices.deleteEvent(id)
    if (!event) {
      serverErrorResponse(res);
      return;
    }
    successResponse(res, { Message: "Event Deleted Successfully" });
  } catch (error) {
    next(error)
  }
}
module.exports = {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent
};
