const express = require("express");
const {
  newController,
  signupController,
} = require("../controllers/signupController");
const Router = express.Router();

Router.get("/", signupController);

Router.post("/new", newController);

module.exports = Router;
