const getOpportunitiesService = require("../../services/Opportunities/get");
const { successResponse } = require("../../utils/response.utils");

const getEvents = async (req, res, next) => {
  try {
    const responseData = await getOpportunitiesService.getEvents();

    successResponse(res, responseData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEvents,
};
