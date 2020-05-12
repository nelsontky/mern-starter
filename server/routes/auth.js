const passport = require("passport");

const registerMiddleware = require("../middlewares/auth/register");
const loginMiddleware = require("../middlewares/auth/login");

function extractUserInfo(user) {
  const { username } = user;
  return { username };
}

module.exports = (app) => {
  app.post(
    "/register",
    registerMiddleware,
    function (req, res, next) {
      passport.authenticate("local", (err, user, info) => {
        req.user = extractUserInfo(user);
        next();
      })(req, res, next);
    },
    (req, res) =>
      res.status(200).json({ success: "Registration success", user: req.user })
  );

  app.post(
    "/login",
    loginMiddleware,
    function (req, res, next) {
      passport.authenticate("local", (err, user, info) => {
        if (!user) {
          return res
            .status(400)
            .json({ username: "Email or password incorrect" });
        } else {
          req.user = extractUserInfo(user);
          next();
        }
      })(req, res, next);
    },
    (req, res) =>
      res.status(200).json({ success: "Login success", user: req.user })
  );

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
