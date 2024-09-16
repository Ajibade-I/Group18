const express = require("express");
const { isLogin } = require("../lib/midlleware/auth-middleware");
const { createJobSeeker } = require("../controllers/jobSeekerController");
const router = express.Router();

// Create a new job provider
router.post("/", isLogin, createJobSeeker);

module.exports = router;
