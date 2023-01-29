const responseCodes = require("../constants/ResponseCodes");
const { FAILURE, BAD_REQUEST, NOT_FOUND } = require("../constants/Responses");

const responeObject = (status, success, data, error) => {
  return {
    status: {
      code: status,
      success: success,
    },
    data: data,
    error: error,
  };
};

const serverErrorResponse = (res, message) => {
  res.status(responseCodes.SERVER_ERROR).send(
    responeObject(responseCodes.SERVER_ERROR, false, null, {
      message: message ? message : FAILURE,
    }),
  );
};

const badRequestResponse = (res, message) => {
  res.status(responseCodes.BAD_REQUEST).send(
    responeObject(responseCodes.BAD_REQUEST, false, null, {
      message: message ? message : BAD_REQUEST,
    }),
  );
};

const notFoundResponse = (res, message) => {
  res.status(responseCodes.NOT_FOUND).send(
    responeObject(responseCodes.NOT_FOUND, false, null, {
      message: message ? message : NOT_FOUND,
    }),
  );
};

const successResponse = (res, dataObj) => {
  res
    .status(responseCodes.SUCCESS)
    .send(responeObject(responseCodes.SUCCESS, true, dataObj, null));
};

module.exports = {
  serverErrorResponse,
  badRequestResponse,
  successResponse,
  notFoundResponse,
};
