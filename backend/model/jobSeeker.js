const mongoose = require("mongoose");

const jobSeekerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    resumeUrl: {
      type: String, 
    },
    skills: [
      {
        type: String, 
      },
    ],
    experience: [
      {
        jobTitle: { type: String },
        companyName: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String },
      },
    ],
    applications: [
      {
        job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" }, // Jobs the seeker has applied to
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

const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);

module.exports = JobSeeker;
