require("dotenv/config");
const express = require("express");
const createHttpError = require("http-errors");
const httpErrors = require("http-errors");
const app = express();

app.use(express.json());

app.use("/api/coffees", require("./routes/coffees"));

app.use("*", (req, res, next) => {
  next(createHttpError(404, "Route not found"));
});

app.use((err, req, res, next) => {
  let errorStatus = 500;
  let errorMessage = "Unknown error has occurred";

  if (httpErrors.isHttpError(err)) {
    errorStatus = err.status;
    errorMessage = err.message;
  }

  res.status(errorStatus).json({ error: errorMessage });
});

module.exports = app;
