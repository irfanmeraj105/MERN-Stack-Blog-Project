// logout controller function

const logoutController = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging out" });
  }
};

// exporting the logout controller function
module.exports = logoutController;
