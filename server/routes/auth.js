const passport = require("passport");

const registerMiddleware = require("../middlewares/auth/register");
const loginMiddleware = require("../middlewares/auth/login");
const ensureAuthenticated = require("../middlewares/auth/ensureAuthenticated");

function extractUserInfo(user) {
  const { username } = user;
  return { username };
}

module.exports = (app) => {
  app.post("/register", registerMiddleware, function (req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }

      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res
          .status(200)
          .json({ success: "Login success", user: extractUserInfo(user) });
      });
    })(req, res, next);
  });

  app.post("/login", loginMiddleware, function (req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res
          .status(400)
          .json({ username: "Email or password incorrect" });
      }

      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res
          .status(200)
          .json({ success: "Login success", user: extractUserInfo(user) });
      });
    })(req, res, next);
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
