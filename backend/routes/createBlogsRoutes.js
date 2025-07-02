const express = require("express");
const createBlogController = require("../controllers/createBlogController");
const isAdmin = require("../middleware/isAdmin");
const upload = require("../middleware/multer");

const createBlogRoutes = express.Router();

// creating the route for the create a  new blog post

createBlogRoutes.post(
  "/create",
  isAdmin,
  upload.single("image"),
  createBlogController
);

// export the createBlogRoutes
module.exports = createBlogRoutes;
