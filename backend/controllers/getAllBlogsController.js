const blogPost = require("../models/blogModel");

const getAllBlogsPostsController = async (req, res) => {
  try {
    const posts = await blogPost.find();
    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    } else {
      res.status(200).json(posts);
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export
module.exports = getAllBlogsPostsController;
