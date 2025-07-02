const express = require("express");
const isAdmin = require("../middleware/isAdmin");
const upload = require("../middleware/multer");
const updateBlogController = require("../controllers/updateBlogController");

const updateBlogRoutes = express.Router();

// route to update the blog post

updateBlogRoutes.patch("/update-post/:id", isAdmin, upload.single('image'), updateBlogController);

// export
module.exports = updateBlogRoutes;
