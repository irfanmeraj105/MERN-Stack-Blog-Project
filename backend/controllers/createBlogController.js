const blogPost = require("../models/blogModel");

const createBlogController = async (req, res) => {
  try {
    const { title, description } = req.body;

    // getting the image
    const image = req.file.filename;

    const createPost = new blogPost({
      title: title,
      description: description,
      image: image,
    });

    await createPost.save();
    res
      .status(201)
      .json({ message: "Blog post created successfully", data: createPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export the createBlogController
module.exports = createBlogController;
