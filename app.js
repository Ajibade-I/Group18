const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { errorHandler, notFound } = require("./api/lib/middleware/error-middleware");
const accessLogs = require("./api/lib/middleware/accessLogs");
const {
  userRouter,
  jobProviderRouter,
  jobSeekerRouter,
} = require("./api/routes/routesIndex");

const app = express();

app.use(cors());
app.use(cookieParser(process.env.JWT_PRIVATE_KEY));

app.use(express.json());

app.use("/api/v1/users", accessLogs, userRouter);
app.use("/api/v1/jobProviders", accessLogs, jobProviderRouter);
app.use("/api/v1/jobSeekers", accessLogs, jobSeekerRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
