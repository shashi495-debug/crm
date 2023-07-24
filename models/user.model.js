const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now(); //9:30:16
    },
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now(); //9:31:16
    },
  },
  userType: {
    type: String,
    default: "CUSTOMER",
  },
  userStatus: {
    type: String,
    default: "APPROVED",
  },
});

module.exports = mongoose.model("User", userSchema);
