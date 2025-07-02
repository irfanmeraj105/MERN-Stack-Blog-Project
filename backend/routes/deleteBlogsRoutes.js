const express = require("express");
const isAdmin = require("../middleware/isAdmin");
const deleteBlogController = require("../controllers/deleteBlogController");
const deleteBlogRoutes = express.Router();

// route for the deletion of the blog post
deleteBlogRoutes.delete("/delete/:id", isAdmin, deleteBlogController);

// export
module.exports = deleteBlogRoutes;
