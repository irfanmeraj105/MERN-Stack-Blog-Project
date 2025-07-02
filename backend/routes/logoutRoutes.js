const express = require("express");
const logOutController = require("../controllers/logoutController");
const logoutRoutes = express.Router();

// routes for the logout
logoutRoutes.post("/logout", logOutController);

// exporting the routes for the logout api
module.exports = logoutRoutes;
