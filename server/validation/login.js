const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (data) => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Email field is required";
  } else if (!Validator.isEmail(data.username)) {
    errors.username = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
