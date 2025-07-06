const blogPost = require("../models/blogModel");
const fs = require("fs");
const path = require("path");

const deleteBlogController = async (req, res) => {
  try {
    const blogId = req.params.id;

    const findPost = await blogPost.findById(blogId);
    if (!findPost) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Delete associated image if exists
    if (findPost.image) {
      const imagePath = path.join("public/images", findPost.image);
      try {
        await fs.promises.unlink(imagePath);
        console.log("Post image deleted successfully");
      } catch (error) {
        console.error("Error deleting post image:", error);
      }
    }

    // Delete blog from database
    const deletePost = await blogPost.findByIdAndDelete(blogId);
    res.status(200).json({
      message: "Blog deleted successfully",
      data: deletePost,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteBlogController;
