const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (data) => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";

  // Email checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Email field is required";
  } else if (!Validator.isEmail(data.username)) {
    errors.username = "Email is invalid";
  }

  // Phone number checks
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number field is required";
  } else if (
    !Validator.isNumeric(data.phoneNumber, { no_symbols: true }) ||
    data.phoneNumber.length !== 8
  ) {
    errors.phoneNumber =
      "Phone number is invalid. Phone number should be 8 digits long and should not contain symbols like spaces.";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
