require('dotenv').config();
const mongoose = require("mongoose")
const app = require('./app');


mongoose.connect( process.env.DATABASE_URL,{
  }).then(con=>{
    console.log("DB Connection is established");
  });

  const port = process.env.PORT || 8000
      app.listen(port, () => {
        console.log(`App running on port ${port} 🚀🚀🚀🚀`);
      });
