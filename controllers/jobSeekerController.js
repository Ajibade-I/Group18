const JobSeeker = require("../model/jobSeeker");
const User = require("../model/users");


// Create a new Job Seeker profile
const createJobSeeker = async (req, res) => {
  const { resumeUrl, skills, experience } = req.body;

  const userId = req.user._id

  // Ensure user exists
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  // Create job seeker profile
  const jobSeeker = new JobSeeker({
    user: userId,
    resumeUrl,
    skills,
    experience,
  });

  await jobSeeker.save();

  return res.status(200).json({
    success: true,
    data: jobSeeker,
    msg: "Job seeker profile created successfully",
  });
};

// Update Job Seeker experience
const updateExperience = async (req, res) => {
  
    const { jobSeekerId, experience } = req.body;

  const jobSeeker = await JobSeeker.findById(jobSeekerId);
  if (!jobSeeker) {
    return res
      .status(404)
      .json({ msg: "Job Seeker not found" });
  }

  jobSeeker.experience.push(experience);
  await jobSeeker.save();

  return res.status(StatusCodes.OK).json({
    success: true,
    data: jobSeeker,
    msg: "Experience added successfully",
  });
};

// Apply for a job
const applyForJob = async (req, res) => {

    const { jobSeekerId, jobId } = req.body;

    const jobSeeker = await JobSeeker.findById(jobSeekerId);
    if (!jobSeeker) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Job Seeker not found" });
    }

    jobSeeker.applications.push({ job: jobId });
    await jobSeeker.save();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: jobSeeker,
      msg: "Applied for job successfully",
    });

};

module.exports = { createJobSeeker, updateExperience, applyForJob };
