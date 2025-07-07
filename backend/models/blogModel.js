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
    comments:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Comments',
    }]
  },
  { timestamps: true }
);

// create the blog model

const blogPost = mongoose.model("BlogPost", blogSchema);

// export
module.exports = blogPost;
