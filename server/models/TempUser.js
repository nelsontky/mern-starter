const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tempUserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailVerificationCode: {
    type: String,
    required: true,
  },

  // Set expiry as 24 hours
  createdAt: {
    type: Date,
    expires: 60 * 60 * 24,
    default: Date.now,
  },
});

module.exports = mongoose.model("TempUser", tempUserSchema);
