const express = require("express");
const aboutController = require("../controllers/aboutController");
const Router = express.Router();

Router.get("/", aboutController);

module.exports = Router;
