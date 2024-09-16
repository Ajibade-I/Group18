const JobProvider = require("../model/jobProvider");
const User = require("../model/users");

const createJobProvider = async (req, res) => {
  const { companyName, companyWebsite } = req.body;

  const userId = req.user._id;

  // Check if the user exists
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  // Create a new JobProvider document
  const jobProvider = new JobProvider({
    user: userId,
    companyName,
    companyWebsite,
  });

  // Save the job provider to the database
  await jobProvider.save();

  return res.status(200).json({
    success: true,
    data: jobProvider,
    msg: "Job provider created successfully",
  });
};

module.exports = { createJobProvider };
