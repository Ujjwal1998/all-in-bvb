// external imports
const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(callbackFn) {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(process.env.DB_URL, {})
    .then(() => {
      callbackFn();
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
