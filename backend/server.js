const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const connectDB = require("./utils/db");
const authRoutes = require("./routes/authRoutes");
const loginRoutes = require("./routes/loginRoutes");
const logoutRoutes = require("./routes/logoutRoutes");
const createBlogRoutes = require("./routes/createBlogsRoutes");
const deleteBlogRoutes = require("./routes/deleteBlogsRoutes");
const getAllBlogsRoutes = require("./routes/getAllBlogsRoutes");
const updateBlogRoutes = require("./routes/updateBlogRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const commentsRoutes = require("./routes/commentsRoutes");
const publicRoutes = require("./routes/publicRoutes");
const app = express();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// connecting the mongodb
connectDB();

// routes
app.use("/auth", authRoutes);
app.use("/auth", loginRoutes);
app.use("/auth", logoutRoutes);
app.use("/blog", createBlogRoutes);
app.use("/blog", deleteBlogRoutes);
app.use("/", getAllBlogsRoutes);
app.use("/blog", updateBlogRoutes);
app.use('/dashboard', dashboardRoutes)
app.use("/comments", commentsRoutes)
app.use('/public', publicRoutes)

// server listening
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
