const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const validateRegisterInput = require("../../validation/register");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }, (err, user) => {
    if (err) {
      next(err);
    } else if (user) {
      return res.status(400).json({ username: "Email already exists " });
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
