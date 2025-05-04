const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isadmin: {
    type: Boolean,
    default: false,
  },
});

//JWT requires payload(userData) and secret key
userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isadmin: this.isadmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "5d",
      }
    );
  } catch (err) {
    return res.status(400).json({ msg: "jwt generation error" });
  }
};

// Hash the password[pre means before save the data to the database]
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const saltRound = 10;
    const hash_password = await bcrypt.hash(this.password, saltRound);
    this.password = hash_password;
  } catch (error) {
    next(error);
  }
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
