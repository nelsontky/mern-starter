const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const TempUser = require("../../models/TempUser");
const validateRegisterInput = require("../../validation/register");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username, password, phoneNumber } = req.body;

  User.findOne({ $or: [{ username }, { phoneNumber }] }, (err, user) => {
    if (err) {
      next(err);
    } else if (user) {
      return res
        .status(400)
        .json({ username: "Email and/or phone number already exists " });
    } else {
      const passwordHash = bcrypt.hashSync(password, 10);

      new User({
        username,
        passwordHash,
      }).save((err, user) => {
        if (err) {
          next(err);
        } else {
          next(null, user);
        }
      });
    }
  });
};
