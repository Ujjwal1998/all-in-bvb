const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/dbConnect");

const fixtureRouter = require("./routes/fixtures");
const playerRouter = require("./routes/players");
const twitterRouter = require("./routes/twitter");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));
// // execute database connection
// // Access the collection
dbConnect(() => {
  app.use("/api/fixtures", fixtureRouter);
  app.use("/api/players", playerRouter);
  app.use("/api/twitter", twitterRouter);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
