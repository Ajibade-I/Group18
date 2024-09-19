const { default: mongoose } = require("mongoose");
const JobSeeker = require("../model/jobSeeker");
const User = require("../model/users");
const { NotFoundError } = require("../lib/error/not-found-error");
const { BadRequestError } = require("../lib/error");

class JobSeekerController {
  // Create a new Job Seeker profile
  static async createJobSeeker (req, res, next) {
    const { skills, experience } = req.body;
    const userId = req.user._id;
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return next(new NotFoundError("User not found"));
    }

    // Get resume file path if uploaded
    let resumeUrl = req.file ? `uploads/resumes/${req.file.filename}` : null;

    // Create the job seeker profile
    const jobSeeker = new JobSeeker({
      user: userId,
      resumeUrl, // Path to the resume file
      skills: skills ? skills.split(",") : [], // Convert skills string to array
      experience: experience ? JSON.parse(experience) : [], // Expect experience as JSON array
    });

    // Save the JobSeeker profile
    await jobSeeker.save();

    return res.status(201).json({
      success: true,
      data: jobSeeker,
      msg: "Job seeker profile created successfully",
    });
  };

  // Update Job Seeker experience
  static updateExperience = async (req, res) => {
    const { jobSeekerId, experience } = req.body;

    const jobSeeker = await JobSeeker.findById(jobSeekerId);
    if (!jobSeeker) {
      return res.status(404).json({ msg: "Job Seeker not found" });
    }

    jobSeeker.experience.push(experience);
    await jobSeeker.save();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: jobSeeker,
      msg: "Experience added successfully",
    });
  };


  // Get all job seekers
  static async getAllJobSeekers (req, res, next) {
    try {
      const jobSeekers = await JobSeeker.find().populate("userId", "username email role imageUrl");
      const count = jobSeekers.length;
      if (count === 0) {
        return next(new NotFoundError("No job seekers found"));
      }

      const data = {
        count,
        list: jobSeekers,
      };
    
      return res.status(200).json({
        success: true,
        data,
        msg: "All current job seekers",
      });
    } catch (err) {
      return next(err);
    }
  };

  // Get a single job seeker
  static async getJobSeeker (req, res, next) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return next(new BadRequestError("Invalid Job Seeker ID"));
    try {
      const jobSeeker = await JobSeeker.findById(id).populate("user", "username email role imageUrl");
      if (!jobSeeker) {
        return next(new NotFoundError("Job Seeker not found"));
      }

      return res.status(200).json({
        success: true,
        data: jobSeeker,
        msg: "Job Seeker found",
      });
    }
    catch (err) {
      return next(err);
    }
  };

  // Update Job Seeker profile
  static async updateJobSeeker (req, res, next) {
    const id = req.user._id

    const data = updateJobSeekerZodSchema.parse(req.body);

    const { username, city, state, country } = data;

    try {
      const jobSeeker = await JobSeeker.findByIdAndUpdate(id, data, { new: true });
      if (!jobSeeker) {
        return next(new NotFoundError("Job Seeker not found"));
      }

      // Update the referenced User document
      const user = await User.findById(jobSeeker.userId);
      if (!user) {
        return next(new NotFoundError("User not found"));
      }
      
      if (username) user.username = username;
      if (city) user.city = city;
      if (state) user.state = state;
      if (country) user.country = country;

      if (username || city || state || country) await user.save();

      return res.status(200).json({
        success: true,
        data: jobSeeker,
        msg: "Job Seeker and User updated successfully",
      });
    }
    catch (err) {
      return next(err);
    }
  };

  // Delete Job Seeker profile
  static async deleteJobSeeker (req, res, next) {
    const id = req.user._id

    try {
      const jobSeeker = await JobSeeker.findByIdAndDelete(id);
      if (!jobSeeker) {
        return next(new NotFoundError("Job Seeker not found"));
      }

      // Delete the referenced User document
      const user = await User.findById(jobSeeker.userId);
      if (!user) {
        return next(new NotFoundError("User not found"));
      }

      await user.remove();

      return res.status(200).json({
        success: true,
        data: jobSeeker,
        msg: "Job Seeker and User deleted successfully",
      });
    }
    catch (err) {
      return next(err);
    }
  };





  // // Apply for a job
  // const applyForJob = async (req, res) => {

  //     const { jobSeekerId, jobId } = req.body;

  //     const jobSeeker = await JobSeeker.findById(jobSeekerId);
  //     if (!jobSeeker) {
  //       return res
  //         .status(StatusCodes.NOT_FOUND)
  //         .json({ msg: "Job Seeker not found" });
  //     }

  //     jobSeeker.applications.push({ job: jobId });
  //     await jobSeeker.save();

  //     return res.status(StatusCodes.OK).json({
  //       success: true,
  //       data: jobSeeker,
  //       msg: "Applied for job successfully",
  //     });

  // };
};

module.exports = JobSeekerController;
