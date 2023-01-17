const express = require("express");
const morgan = require("morgan");
const { sequelize } = require("./utils/sequelize");
const unknownEndpoint = require("./middleware/unknown-endpoint");
const cors = require("cors");
const professorsRouter = require("./controllers/professors");
const activitiesRouter = require("./controllers/activities");
const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use("/api/professors/", professorsRouter);
app.use("/api/activities/", activitiesRouter);
app.use(unknownEndpoint);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
