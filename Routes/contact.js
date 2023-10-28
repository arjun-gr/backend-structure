const express = require("express");
const contactController = require("../controllers/contactController");
const Router = express.Router();

Router.get("/", contactController);

module.exports = Router;
