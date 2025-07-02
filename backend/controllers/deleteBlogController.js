const blogPost = require("../models/blogModel");

const deleteBlogController = async (req, res) => {
  try {
    const blogId = req.params.id;

    const findPost = await blogPost.findById(blogId);
    if (!findPost) {
      return res.status(404).json({ message: "Blog not found" });
    }
    const deletePost = await blogPost.findByIdAndDelete(blogId);
    res
      .status(200)
      .json({ message: "Blog deleted successfully", data: deletePost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export
module.exports = deleteBlogController;
