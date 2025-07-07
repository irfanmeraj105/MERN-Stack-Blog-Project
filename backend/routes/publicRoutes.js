const express = require("express");
const getSinglePost = require("../controllers/publicController");
const publicRoutes = express.Router();

publicRoutes.get("/singlepost/:id", getSinglePost);

// export
module.exports = publicRoutes;
