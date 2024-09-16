const express = require("express");
const { isLogin } = require("../lib/midlleware/auth-middleware");
const { createJobProvider } = require("../controllers/jobProviderController");
const router = express.Router();

// Create a new job provider
router.post("/", isLogin, createJobProvider);

module.exports = router;
