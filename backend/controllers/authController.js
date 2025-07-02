const registerModel = require("../models/registerModel");
const bcrypt = require("bcryptjs");
// controller function for the registration of the new user
const registerController = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // check if the user is registered already
    const existingUser = await registerModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // getting the profile image
    const profileImage = req.file.filename;

    // create a new user
    const newUser = new registerModel({
      fullName,
      email,
      password: hashedPassword,
      profile: profileImage,
    });

    // save the new user to the database
    const result = await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

// exporting the controller

module.exports = registerController;
