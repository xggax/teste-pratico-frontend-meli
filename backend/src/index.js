const cors = require("cors");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (request, response) => {
  response.status(200).send('[Back-end]: Everything is fine, cheers.');
});

app.use("/api/items", routes.itemRoutes);

module.exports = app;