const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerModel = require("../models/registerModel");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided or not
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if user exists
    const user = await registerModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare passwords
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid password" });

    // generate a token
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    // If valid login
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loginController;
