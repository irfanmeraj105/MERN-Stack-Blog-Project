const express = require("express");
const loginController = require("../controllers/loginController");
const loginRoutes = express.Router();

// route path for the login user
loginRoutes.post("/login", loginController);

module.exports = loginRoutes;
