const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { createServer } = require("http");
const { logger, morganMiddleware } = require("./logger");
const app = express();
const httpServer = createServer(app);
require("dotenv").config();
const opportunitiesRoutes = require("./routes/Opportunities");
const { handleErrors } = require("./utils/errorHandling.utils");
const connectDB = require("./config/db.config");
const PORT = process.env.PORT || 8000

var whitelistedDomains = ["http://localhost:3000"];

const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    // bypass the requests with no origin (like curl requests, mobile apps, etc )
    if (!origin) return callback(null, true);

    if (whitelistedDomains.indexOf(origin) === -1) {
      var msg = `${origin} does not have access to this server.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
};

// Start servers
httpServer.listen(PORT, () => {
  logger.info("Server started at port " + 8000);
  connectDB();
});

require("./models");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(cookieParser(process.env.COOKIE_SECRET));

//implementing cors
app.use(cors(corsOptions));

app.use(express.json());

app.use(morganMiddleware);

app.use("/api/opportunities", opportunitiesRoutes);
app.use('/api',require('./routes/Members/index'))
app.use(handleErrors);

module.exports = app;
