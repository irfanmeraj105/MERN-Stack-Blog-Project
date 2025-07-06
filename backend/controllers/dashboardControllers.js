const blogPost = require("../models/blogModel");
const registerModel = require("../models/registerModel");
const fs = require("fs");
const path = require("path");

const getAllPosts = async (req, res) => {
  try {
    const posts = await blogPost.find();

    if (!posts) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json({ success: true, posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get all the user

const getAllUsers = async (req, res) => {
  try {
    const users = await registerModel.find();

    if (!users) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// delete the user
const deleteUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await registerModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    // Delete associated image if exists
    if (user.profile) {
      const imagePath = path.join("public/images", user.profile);
      try {
        await fs.promises.unlink(imagePath);
      } catch (error) {
        console.error("Error deleting post image:", error);
      }
    }

    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export
module.exports = { getAllPosts, getAllUsers, deleteUsers };
