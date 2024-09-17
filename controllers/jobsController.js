const Job = require("../model/job");
const { StatusCodes } = require("http-status-codes");
const { CustomApiError } = require("../lib/error");
const JobProvider = require("../model/jobProvider");

const createJob = async (req, res) => {
  const userRole = req.user.role;

  const {
    title,
    description,
    companyName,
    jobRoles,
    requirements,
    location,
    salaryRange,
    jobType,
    jobFormat,
    status,
  } = req.body;

  // check if user is Jobseeker or JobProvider

  // if user is JobProvider create  with postedBy

  if (userRole === JobProvider) {
    const jobs = await Job.create({
      title,
      description,
      companyName,
      jobRoles,
      requirements,
      location,
      salaryRange,
      jobType,
      postedBy: req.user._id,
      jobFormat,
      status,
    });

    return res
      .status(StatusCodes.CREATED)
      .json({ Massage: "Job Created", data: jobs });
  } else {
    const jobs = await Job.create({
      title,
      description,
      companyName,
      jobRoles,
      requirements,
      location,
      salaryRange,
      jobType,
      jobFormat,
      status,
      applicants: [{ _id: req.user._id }],
    });

    return res
      .status(StatusCodes.CREATED)
      .json({ Massage: "Job Created", data: jobs });
  }
};

// update any of the jobs parameters

const updateJob = async (req, res) => {
  const id = req.params.id;
  const {
    title,
    description,
    companyName,
    jobRoles,
    requirements,
    location,
    salaryRange,
    jobType,
    jobFormat,
    status,
  } = req.body;
  // using query parameter to find the particular job

  const findJob = await Job.findById({ _id: id });

  // if no job is found return notFound
  if (!findJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ Massage: ` Job with ${id} does not exist` });
  }
  //  update operations which returns success
  await Job.updateMany(
    { _id: id },
    {
      title,
      description,
      companyName,
      jobRoles,
      requirements,
      location,
      salaryRange,
      jobFormat,
      jobType,
      status,
    }
  );

  return res.status(StatusCodes.OK).json({ Massage: "Successfully Updated" });
};

//  delete operations
const deleteJob = async (req, res) => {
  const id = req.params.id;

  // find a particular job with query parameter id

  const findJob = await Job.findById({ _id: id });

  // if no job found return not found
  if (!findJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ Massage: ` Job with id-${id} does not found` });
  }
  //  return success
  await Job.deleteOne({ _id: id });

  return res.status(StatusCodes.OK).json({ Massage: " Job deleted" });
};

//  geting a particular job with query parameter id
const getSingleJob = async (req, res) => {
  const id = req.params.id;
  const singleJob = await Job.findById({ _id: id });

  // if no job found return not found else return success

  if (!singleJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ Massage: `Job with id-${id}  is not available` });
  } else {
    return res
      .status(StatusCodes.OK)
      .json({ Massage: "Single", data: singleJob });
  }
};
//  get all jobs created and search operations
const getAllJob = async (req, res) => {
  //  destructure query parameters
  const { jobRoles, jobType, location, minSalary, maxSalary, title } =
    req.query;

  //  Query object ,when empty returns all jobs
  // when its parameter is any of the destructured parameters returns search based on the parameter

  const queryObject = {};
  if (jobRoles) {
    queryObject.jobRoles = { $regex: jobRoles, $options: "i" };
  }
  if (jobType) {
    queryObject.jobType = { $regex: jobType, $options: "i" };
  }
  if (location) {
    queryObject.location = { $regex: location, $options: "i" };
  }

  if (minSalary && maxSalary) {
    queryObject["salaryRange.min"] = { $gte: minSalary };
    queryObject["salaryRange.max"] = { $lte: maxSalary };
  } else if (minSalary) {
    queryObject["salaryRange.min"] = { $gte: minSalary };
  } else if (maxSalary) {
    queryObject["salaryRange.max"] = { $lte: maxSalary };
  }

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  let queryResult = Job.find(queryObject);

  const page = queryObject.page || 1;
  const limit = queryObject.limit || 10;
  const skip = (page - 1) * limit;

  queryResult = queryResult.skip(skip).limit(limit);

  const jobs = await queryResult;

  if (jobs.length === 0) {
    return res.status(StatusCodes.NOT_FOUND).json({ Massage: "No Job Found" });
  }

  return res
    .status(StatusCodes.OK)
    .json({ Massage: "List of Jobs", data: jobs });
};

module.exports = { createJob, updateJob, deleteJob, getSingleJob, getAllJob };
