const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

// create the blog model

const blogPost = mongoose.model("BlogPost", blogSchema);

// export
module.exports = blogPost;
