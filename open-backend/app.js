const express = require('express');
const morgan = require("morgan");

const app = express();

// middlewares

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
  app.use(express.json());
  app.use(express.static(`${__dirname}/public`));
  
 

// app.use("/api/opportunities", opportunitiesRoutes);
app.use("/api", require("./routes/Members/index"));
app.use("/api", require("./routes/Opportunities/index"));

//   Routes


module.exports = app;
