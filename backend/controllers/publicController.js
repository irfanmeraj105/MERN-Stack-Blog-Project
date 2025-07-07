const blogPost = require("../models/blogModel");

const getSinglePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const findPost = await blogPost.findById(postId).populate({
      path: "comments",
      populate: {
        path: "userId",
      },
    });
    if (!findPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(findPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export
module.exports = getSinglePost;
