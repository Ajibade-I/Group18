const jwt = require("jsonwebtoken");
const { Unauthorized } = require("../error");
const User = require("../../model/users");

const isLogin = async (req, res, next) => {
  const { accessToken } = req.signedCookies;

  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_PRIVATE_KEY);
      req.user = await User.findById(decoded._id).select("-password");

      if (!req.user) {
        throw new Error("Invalid user");
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
