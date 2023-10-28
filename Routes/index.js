const express = require("express");
const getUserData = require("../controllers/indexController");
const Router = express.Router();

Router.get("/", getUserData);

module.exports = Router;
