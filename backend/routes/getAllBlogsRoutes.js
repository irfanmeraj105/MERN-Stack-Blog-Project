const express = require("express");
const getAllBlogsPostsController = require("../controllers/getAllBlogsController");
const getAllBlogsRoutes = express.Router();

// route to get all the blogs post

getAllBlogsRoutes.get("/blogs", getAllBlogsPostsController);

// export
module.exports = getAllBlogsRoutes;
