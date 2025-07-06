const express = require("express");
const commentsRoutes = express.Router();

// creating the route for the comments 
commentsRoutes.post("/add-comment");

// export the routes
module.exports = commentsRoutes;
