const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MongoDBStore = require("connect-mongodb-session")(session);

const authRoute = require("./routes/auth");
const MONGO_URI = require("../secrets.json").MONGO_URI;
const passportMiddleware = require("./middlewares/auth/passport");
const SESSION_SECRET = require("../secrets.json").SESSION_SECRET;

const app = express();
const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: "loginSessions",
});

store.on("error", (error) => {
  console.log(error);
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    store,
  })
);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

passportMiddleware(app);
authRoute(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}!`));
