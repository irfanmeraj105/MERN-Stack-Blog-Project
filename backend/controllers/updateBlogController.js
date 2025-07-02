const blogPost = require("../models/blogModel");

const updateBlogController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const postId = req.params.id;

    const findPost = await blogPost.findById(postId);
    if (!findPost) {
      return res
        .status(404)
        .json({ message: "Post not found", success: false });
    }

    if (title) {
      findPost.title = title;
    }
    if (description) {
      findPost.description = description;
    }
    if (req.file) {
      findPost.image = req.file.filename;
    }

    await findPost.save();

    res.status(200).json({
      message: "Post updated successfully",
      success: true,
      post: findPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

module.exports = updateBlogController;
