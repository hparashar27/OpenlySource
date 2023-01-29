const { isCelebrateError } = require("celebrate");
const { logger } = require("../logger");
const { badRequestResponse, serverErrorResponse } = require("./response.utils");

const handleErrors = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    let errorMessage = "";
    const paramsError = err.details.get("params"); // 'details' is a Map()
    const bodyError = err.details.get("body");
    const queryError = err.details.get("query");

    const {
      details: [paramsErrorDetails],
    } = paramsError ? paramsError : { details: [] };
    const {
      details: [bodyErrorDetails],
    } = bodyError ? bodyError : { details: [] };
    const {
      details: [queryErrorDetails],
    } = queryError ? queryError : { details: [] };

    if (paramsErrorDetails && paramsErrorDetails.message) {
      errorMessage = errorMessage + paramsErrorDetails.message + " ";
    }

    if (bodyErrorDetails && bodyErrorDetails.message) {
      errorMessage = errorMessage + bodyErrorDetails.message + " ";
    }

    if (queryErrorDetails && queryErrorDetails.message) {
      errorMessage = errorMessage + queryErrorDetails.message + " ";
    }

    badRequestResponse(res, errorMessage);
    return;
  }

  serverErrorResponse(res, err.message);

  if (res.locals.ctx) {
    logger.child({ context: res.locals.ctx }).error(err.message + "\n" + err.stack);
  } else {
    logger.error(err.stack);
  }
  return;
};

module.exports = {
  handleErrors,
};
