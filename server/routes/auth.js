const passport = require("passport");

const registerMiddleware = require("../middlewares/auth/register");
const loginMiddleware = require("../middlewares/auth/login");

module.exports = (app) => {
  app.post(
    "/register",
    registerMiddleware,
    passport.authenticate("local"),
    (req, res) => res.status(200).json({ success: "Registration success" })
  );

  app.post(
    "/login",
    loginMiddleware,
    passport.authenticate("local"),
    (req, res) => res.status(200).json({ success: "Login success" })
  );
};
