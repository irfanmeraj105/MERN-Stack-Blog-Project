const express = require("express");
const commentsController = require("../controllers/commentsController");
const isLogin = require("../middleware/isLogin");
const commentsRoutes = express.Router();

// creating the route for the comments
commentsRoutes.post("/add-comment", isLogin, commentsController);

// export the routes
module.exports = commentsRoutes;
