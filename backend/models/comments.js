const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogPost",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Register_for_blog",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create the model
const Comments = mongoose.model("Comments", commentsSchema);
// export the model
module.exports = Comments;
