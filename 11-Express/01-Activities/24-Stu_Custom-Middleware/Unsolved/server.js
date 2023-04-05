const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const api = require("./routes/index.js");

const PORT = 3001;

const app = express();

const middleware = (req, res, next) => {
  const yellow = "\x1b[33m%s\x1b[0m";
  console.log(yellow, `${req.method} request to ${req.path}`);
  next();
};
app.use(middleware);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for feedback page
app.get("/feedback", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/feedback.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
