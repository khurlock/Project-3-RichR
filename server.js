const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const income = require("./routes/api/income");
const expenses = require("./routes/api/expenses");
const home = require("./routes/api/home");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello!"));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/income", income);
app.use("/api/expenses", expenses);
app.use("/api/home", home);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
