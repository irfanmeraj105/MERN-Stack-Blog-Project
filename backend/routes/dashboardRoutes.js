const express = require("express");
const isAdmin = require("../middleware/isAdmin");
const {
  getAllPosts,
  getAllUsers,
  deleteUsers,
  getAllComments,
} = require("../controllers/dashboardControllers");
const dashboardRoutes = express.Router();

// route for the data on the dashboard
dashboardRoutes.get("/", isAdmin, getAllPosts);
dashboardRoutes.get("/users", isAdmin, getAllUsers);
dashboardRoutes.delete("/delete/:id", isAdmin, deleteUsers);
dashboardRoutes.get('/all-comments',isAdmin,getAllComments)

// export
module.exports = dashboardRoutes;
