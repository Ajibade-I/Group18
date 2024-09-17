const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { errorHandler, notFound } = require("./backend/lib/middleware/error-middleware");
const accesslogs = require("./backend/lib/middleware/accessLogs");
const {
  userRouter,
  jobProviderRouter,
  jobSeekerRouter,
} = require("./backend/routes/routesIndex");

const app = express();

app.use(cors());
app.use(cookieParser(process.env.JWT_PRIVATE_KEY));

app.use(express.json());

app.use("/api/user", accesslogs, userRouter);
app.use("/api/jobProvider", accesslogs, jobProviderRouter);
app.use("/api/jobSeeker", accesslogs, jobSeekerRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
