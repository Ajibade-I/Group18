const express = require("express");
const { isLogin } = require("../lib/middleware/auth-middleware");
const JobSeekerController = require("../controllers/jobSeekerController");
const upload = require("../config/multer");

const router = express.Router();

// Create a new job provider
router.post("/", isLogin, upload.single("resume"), JobSeekerController.createJobSeeker);
router.put("/experience", isLogin, JobSeekerController.updateExperience);
router.patch("/", isLogin, JobSeekerController.updateJobSeeker);
router.delete("/", isLogin, JobSeekerController.deleteJobSeeker);

router.get("/", JobSeekerController.getAllJobSeekers);
router.get("/:id", JobSeekerController.getJobSeeker);

module.exports = router;
