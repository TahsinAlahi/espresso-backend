require("dotenv/config");
const express = require("express");
const createHttpError = require("http-errors");
const httpErrors = require("http-errors");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: ["http://localhost:5000", "http://localhost:5173"],
};

app.use(cors(corsOptions));

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
