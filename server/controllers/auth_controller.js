// browser url req -> router -> controller (logic part takees input from user modules etc and respond back)

const User = require("../models/user_model.js");
const bcrypt = require("bcrypt");
const home = async (req, res) => {
  try {
    res.json({
      message: req.body,
    });
  } catch (error) {
    console.log("something wrong", error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res
        .status(400)
        .json({ message: "User already exists with the same email" });
    } else {
      const userCreated = await User.create({
        username,
        email,
        phone,
        password,
      });
      return res.status(201).json({
        message: "User created successfully",
        token: userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
    }
  } catch (error) {
    console.log("Does not created", error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    // console.log(userExist);

    if (!userExist)
      return res.status(400).json({ message: "invalid email or password" });

    //password comparison
    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      return res.status(201).json({
        message: "login successfull",
        token: userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "invalid email or password" });
    }
  } catch (error) {
    console.log(error);
  }
};

//to send user data after login - User logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from user route ${error}`);
  }
};

module.exports = { home, register, login, user };
