const express = require("express");
const { signup, Login, activateAccount } = require("../controllers/usercontroller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", Login);
router.get("/activate-account", activateAccount);

module.exports = router;
