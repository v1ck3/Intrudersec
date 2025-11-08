import user from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const handleuser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const User = await user.findOne({ email });
    if (User) {
      return res.status(400).json({
        message: "user already exist",
      });
    }
    const newuser = new user({
      name,
      email,
      password,
    });

    newuser.password = await bcrypt.hash(password, 10);

    await newuser.save();
    res.status(201).json({
      message: "user register successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ error: "internal server error" });
  }
};

const handlelogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const User = await user.findOne({ email });
    if (!User) {
      return res.status(400).json({
        message: "User Not exist",
      });
    }
    

    const isEqual = await bcrypt.compare(password, User.password);
    if (!isEqual) {
      res.status(400).json({ message: "Authentication Failed" });
    }
    
    const jwtToken = jwt.sign(
      { email: User.email, _id: User._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

  

    res.status(200).json({
      jwtToken,
      message: "Login Successfull",
      success: true,
      email,
      name: User.name,
    });
  } catch (error) {
    res.status(400).json({ error: "internal server error" });
  }
};

export default { handleuser, handlelogin };
