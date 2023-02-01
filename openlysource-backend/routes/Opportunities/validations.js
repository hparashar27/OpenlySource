const Joi = require("celebrate").Joi;

module.exports = {
  addEvent: {
    body: {
      eventName: Joi.string().trim().required(),
      logo: Joi.string().trim().required(),
      websiteUrl: Joi.string().trim().required(),
      months: Joi.string().trim().required(),
      description: Joi.string().trim().required(),
    },
  },
};
