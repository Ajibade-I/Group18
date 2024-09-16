const express = require("express");

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.get("/activate-account", activateAccount);

module.exports = router;
