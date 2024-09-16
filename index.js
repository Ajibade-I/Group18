require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { dbConnect } = require("./config/dbconnect");
require("colors")
const { errorHandler, notFound } = require("./lib/midlleware/error-middleware");
const app = express();
const port = process.env.PORT || 7500;

app.use(express.json());

app.use(notFound);
app.use(errorHandler);

dbConnect();
app.listen(port, () => console.log(`Server listening on port ${port}....`));
