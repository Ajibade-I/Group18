require("dotenv").config();
require("express-async-errors");
const { dbConnect } = require("./backend/config/dbConnect");
require("colors");
const app = require("./app");
const http = require("http"); // HTTP server
const { initSocket } = require("./backend/config/webSocket");


const port = process.env.PORT || 7500;

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
