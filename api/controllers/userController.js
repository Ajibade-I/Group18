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
  user.AccountActivationToken = token;
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
  user.isVerified = true;
  user.AccountactivationToken = undefined;
  user.AccountTokenExpires = undefined;

  await user.save();

 res.status(200).json({message:"Account activated"})
};

//@Method:POST /auth/login
//@Desc:To login a user
//@Access:Private

const Login = async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError("Invalid email or password");
  }

  // Check if password is valid
  const validPassword = await bcryptjs.compare(password, user.password);
  if (!validPassword) {
    throw new BadRequestError("Invalid email or password");
  }

  // Check if the user is activated
  if (!user.isVerified) {
    // Check if the account activation token has expired
    if (user.AccountTokenExpires < Date.now()) {
      // Generate a new activation token
      const token = await bcryptjs.hash(email.toString(), 10);
      const thirtyMinutes = 30 * 60 * 1000;

      // Update the user's account activation token and expiration time
      user.AccountactivationToken = token;
      user.AccountTokenExpires = new Date(Date.now() + thirtyMinutes);

      // Save the updated user details to the database
      await user.save();

      // Send the new activation token via email
      await sendAccountActivation({ email, token });

      return res.status(200).json({
        msg: "Account not activated. A new activation link has been sent to your email.",
      });
    }

    return res.status(200).json({
      msg: "Account not activated. Click the link in your email to activate your account.",
    });
  }

  // Create payload for the JWT token
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const data = {
    id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  };

  // Encrypt the payload to create the JWT token
  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  const oneDay = 24 * 60 * 60 * 1000;

  // Send accessToken as a cookie
  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });

  // Respond with a success message and user data
  res.status(201).json({
    success: true,
    user: data,
    message: "Login successful",
  });
};
module.exports = { signup, Login, activateAccount };
