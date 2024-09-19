require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { dbConnect } = require("./config/dbconnect");
require("colors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { errorHandler, notFound } = require("./lib/midlleware/error-middleware");
const accesslogs = require("./lib/midlleware/accesslogs");
const {
  userRouter,
  jobProviderRouter,
  jobSeekerRouter,
} = require("./routes/routesIndex");

const app = express();
const port = process.env.PORT || 7500;
app.use(cookieParser(process.env.JWT_PRIVATE_KEY));

app.use(express.json());

app.use("/api/user", accesslogs, userRouter);
app.use("/api/jobProvider", accesslogs, jobProviderRouter);
app.use("/api/jobSeeker", accesslogs, jobSeekerRouter);
app.use("/api/job", accesslogs, jobRouter);
app.use(notFound);
app.use(errorHandler);

const server = http.createServer(app);

// Initialize WebSocket server
const io = initSocket(server); // Pass the HTTP server

// Optional: Pass io to the request object (middleware) if needed in routes
app.use((req, res, next) => {
  req.io = io; // Attach io instance to req object
  next();
});

dbConnect();
server.listen(port, () => console.log(`Server listening on port ${port}....`));

