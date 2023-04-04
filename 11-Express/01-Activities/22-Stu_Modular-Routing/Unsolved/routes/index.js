// TODO: Import express
const express = require("express");

// TODO: Import modules for tips/feedback
const tips = require("express").Router();
const fb = require("express").Router();

// TODO: Create app vaible to store the value of express()
const app = express();

// TODO: Use our routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// TODO: Export app

module.exports = app;
