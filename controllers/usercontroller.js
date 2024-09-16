const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const User = require("../model/users");
const {
  sendAccountActivation,
} = require("../lib/message/account-activation-message");
const { BadRequestError, Unauthorized } = require("../lib/error");

//@Method:POST /auth/signup
//@Desc:To signup a user
//@Access:Public
const signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  // Validate required fields
  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcryptjs.hash(password, 10);

  // Create a new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    role,
  });

  // Save the user to the database
  const user = await newUser.save();

  const token = await bcryptjs.hash(email.toString(), 10);
  const oneHour = 60 * 60 * 1000;

  //assign activation token to user
  user.AccountactivationToken = token;
  user.AccountTokenExpires = new Date(Date.now() + oneHour);

  await user.save();

  // send activation email
  await sendAccountActivation({ email, token });
  res.status(201).json({
    success: true,
    message: "Click the link in your email to activate your account",
  });
};

//@Method:GET /auth/activate-account
//@Desc: Activate account
//@Access:Private

const activateAccount = async (req, res) => {
  //find user
  const user = await User.findOne({
    AccountactivationToken: req.query.token,
    AccountTokenExpires: { $gt: Date.now() },
  });

  if (!user) {
    throw new BadRequestError("Link has expired.PLease, request new link");
  }

  //reassign user properties
  user.isActivated = true;
  user.AccountactivationToken = undefined;
  user.AccountTokenExpires = undefined;

  await user.save();

  return succesResponse(res, "Account activated");
};

//@Method:POST /auth/login
//@Desc:To login a user
//@Access:Private

const Login = async (req, res) => {
  //validate login body
  const error = await validateLogin(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const { email_or_userName, password } = req.body;

  //find user by email or username
  const user = await User.findOne({
    $or: [
      { email: email_or_userName },
      { "profile.userName": email_or_userName },
    ],
  });

  if (!user) {
    throw new BadRequestError("Invalid email or password");
  }

  //check if password is correct
  const valid = await bcryptjs.compare(password, user.password);
  if (!valid) {
    throw new BadRequestError("Invalid email or password");
  }

  const email = user.email;
  //check if user is activated
  if (!user.isActivated) {
    const response = await checkValidation(user, email);
    res.status(200).json(response);
    return;
  }

  //check if account has been suspended
  if (user.accountStatus !== "active") {
    throw new Unauthorized("Your account has been suspended");
  }
  //create payload
  const payload = {
    _id: user._id,
    email: user.email,
  };

  //encrypt payload to create token
  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  const oneDay = 24 * 60 * 60 * 1000;

  //send accessToken as a cookie
  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });

  return res.status(200).json({ message: "Log in succesfull" });
};

module.exports = { signup, Login, activateAccount };
