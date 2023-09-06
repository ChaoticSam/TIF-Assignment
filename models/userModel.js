const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: [true, "name is required"],
      },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
