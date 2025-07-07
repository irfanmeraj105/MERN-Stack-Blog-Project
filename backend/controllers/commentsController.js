const blogPost = require("../models/blogModel");
const Comments = require("../models/comments");

const commentsController = async (req, res) => {
  try {
    const { postId, userId, comment } = req.body;
    const newComment = new Comments({
      postId,
      userId,
      comment,
    });
    await newComment.save();
    const existPost = await blogPost.findById(postId);
    if (!existPost) {
      return res
        .status(404)
        .json({ success: false, message: "blog post not found" });
    }
    existPost.comments.push(newComment._id);
    await existPost.save();
    res.json({
      success: true,
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding comment" });
  }
};

// export
module.exports = commentsController;
