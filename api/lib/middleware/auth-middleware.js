const jwt = require("jsonwebtoken");
const { Unauthorized } = require("../error");
const User = require("../../model/users");

const isLogin = async (req, res, next) => {
  const { accessToken } = req.signedCookies || req.cookies;

  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_PRIVATE_KEY);
      req.user = await User.findById(decoded._id).select(
        "-password -__v -createdAt -updatedAt -passwordResetToken -passwordResetExpires -AccountActivationToken -AccountTokenExpires"
      );

      if (!req.user) {
        return next(new Unauthorized("User not found, please login to continue"));
      }

      next(); // Continue if a regular user is logged in
    } catch (error) {
      console.log(error);
      res.status(401).json({ success: false, msg: "Please login to continue" });
      return;
    }
  } else {
    res.status(401).json({ success: false, msg: "Please login to continue" });
  }
};


module.exports = { isLogin};
