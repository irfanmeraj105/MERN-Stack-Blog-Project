const jwt = require("jsonwebtoken");
const registerModel = require("../models/registerModel");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false, msg: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await registerModel.findById(decoded.id);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "Unauthorized, user not found" });
    }

    if (user.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, msg: "Forbidden, you are not an admin" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
};

module.exports = isAdmin;
