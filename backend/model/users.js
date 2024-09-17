const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
  
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["jobSeeker", "jobProvider"], 
      required: true,
    },
    imageUrl: String, 
    AccountactivationToken: String,
    AccountTokenExpires: Date,
    passwordResetToken: String,
    passwordResetExpired: Date,
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
