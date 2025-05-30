import user from "../models/user.model.js";
import bcrypt from "bcrypt";

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
    const newuser = new user({
      email,
      password,
    });

    newuser.password = await bcrypt.compare(user.password, password);

    await console.log(newuser)
    res.status(201).json({
      message: "user register successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ error: "internal server error" });
  }
};

export default { handleuser, handlelogin };
