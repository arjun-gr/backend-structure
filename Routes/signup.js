const express = require("express");
const signupController = require("../controllers/signupController");
const Router = express.Router();

Router.get("/", signupController);

module.exports = Router;
