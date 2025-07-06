const express = require("express");
const isAdmin = require("../middleware/isAdmin");
const {
  getAllPosts,
  getAllUsers,
  deleteUsers,
} = require("../controllers/dashboardControllers");
const dashboardRoutes = express.Router();

// route for the data on the dashboard
dashboardRoutes.get("/", isAdmin, getAllPosts);
dashboardRoutes.get("/users", isAdmin, getAllUsers);
dashboardRoutes.delete("/delete/:id", isAdmin, deleteUsers);

// export
module.exports = dashboardRoutes;
