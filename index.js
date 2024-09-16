require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { dbConnect } = require("./config/dbconnect");
require("colors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { errorHandler, notFound } = require("./lib/midlleware/error-middleware");
const accesslogs = require("./lib/midlleware/accesslogs");
const userRouter = require("./routes/userRoutes");
const app = express();
const port = process.env.PORT || 7500;
app.use(cookieParser(process.env.JWT_PRIVATE_KEY));

app.use(express.json());

app.use("/api/users", accesslogs, userRouter);
app.use(notFound);
app.use(errorHandler);


dbConnect();
app.listen(port, () => console.log(`Server listening on port ${port}....`));
