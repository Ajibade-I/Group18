require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { dbConnect } = require("./config/dbconnect");
require("colors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { errorHandler, notFound } = require("./lib/midlleware/error-middleware");
const accesslogs = require("./lib/midlleware/accesslogs");
const { userRouter, jobProviderRouter, jobSeekerRouter } = require("./routes/routesIndex");

const app = express();
const port = process.env.PORT || 7500;
app.use(cookieParser(process.env.JWT_PRIVATE_KEY));

app.use(express.json());

app.use("/api/user", accesslogs, userRouter);
app.use("/api/jobProvider", accesslogs, jobProviderRouter);
app.use("/api/jobSeeker", accesslogs, jobSeekerRouter);
app.use(notFound);
app.use(errorHandler);

dbConnect();
app.listen(port, () => console.log(`Server listening on port ${port}....`));
