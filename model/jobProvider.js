const mongoose = require("mongoose");

const jobProviderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // References the User model
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyWebsite: {
      type: String,
    },
    jobsPosted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job", // References jobs created by the provider
      },
    ],
  },
  { timestamps: true }
);

const JobProvider = mongoose.model("JobProvider", jobProviderSchema);

module.exports = JobProvider;
