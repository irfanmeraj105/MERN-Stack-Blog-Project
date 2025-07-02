const express = require("express");
const registerController = require("../controllers/authController");
const upload = require("../middleware/multer");
const authRoutes = express.Router();

// route path for the register a new user
authRoutes.post("/register", upload.single("profile"), registerController);

module.exports = authRoutes;
