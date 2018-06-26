const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./client/src/routes/api/users");
const profile = require("./client/src/routes/api/profile");
const income = require("./client/src/routes/api/income");
const expenses = require("./client/src/routes/api/expenses");
const home = require("./client/src/routes/api/home");
const userForm = require ("./client/src/routs/api/")

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require(".client/src/config/keys").mongoURI;

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/income", income);
app.use("/api/expenses", expenses);
app.use("/api/home", home);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`http://localhost:${port}`));
