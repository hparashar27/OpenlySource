const prodLogger = require("./prodLogger");
const devLogger = require("./devLogger");
const morgan = require("morgan");

let logger = null;

if (process.env.NODE_ENV === "production") {
  logger = prodLogger();
} else {
  logger = devLogger();
}

const morganMiddleware = morgan("tiny", {
  stream: {
    write: (message) => {
      logger.http(message.trim());
    },
  },
});

module.exports = { logger, morganMiddleware };
