const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    jobRoles: { type: String, required: true },
    requirements: [{ type: String, required: true }],
    location: {
      type: String,
      required: true,
    },
    salaryRange: {
      type: String,
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "contract", "internship"],
      required: true,
    },
    jobFormat: {
      type: String,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobProvider",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Ongoing", "Completed"],
      default: "Pending",
    },
    applicants: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "JobSeeker" }, // Job seeker reference
        status: {
          type: String,
          enum: ["applied", "interview", "offered", "rejected"],
          default: "applied",
        },
        appliedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
