const express = require("express");
const {
  createJob,
  updateJob,
  deleteJob,
  getSingleJob,
  getAllJob,
} = require("../controllers/jobsController");
const { isLogin } = require("../lib/midlleware/auth-middleware");

const router = express.Router();

router.post("/createJob", isLogin, createJob);
router.get("/getAllJobs", getAllJob);
router.patch("/updateJob/:id", isLogin, updateJob);
router.delete("/deleteJob/:id", isLogin, deleteJob);
router.get("/singleJob/:id", isLogin, getSingleJob);

module.exports = router;
