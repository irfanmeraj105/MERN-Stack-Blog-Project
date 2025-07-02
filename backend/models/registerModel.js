const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    profile: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

// creating the registerModel
const registerModel = mongoose.model("Register_for_blog", registerSchema);

// exporting the registerModel
module.exports = registerModel;
