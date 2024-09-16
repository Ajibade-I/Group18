const express = require("express");
const { isLogin } = require("../lib/midlleware/auth-middleware");
const { createJobSeeker } = require("../controllers/jobSeekerController");
const upload = require("../config/multer");
const router = express.Router();

// Create a new job provider
router.post("/", isLogin, upload.array("media", 5), createJobSeeker);

module.exports = router;
