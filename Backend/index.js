import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import bodyparser from "body-parser";
import nodemailer from "nodemailer";

import cors from "cors";
import router from "./routes/intruder.js";
import connectDB from "./config/db.js";

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or "smtp-mail.outlook.com"
      auth: {
        user: "intrudersecacademy@gmail.com",
        pass: process.env.Gmailid, // NOT your Gmail password
      },
    });

    const mailOptions = {
      from: email,
      to: "intrudersecacademy@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}
            Email: ${email}
            Message:${message}`,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email Sent Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to Send Email" });
  }
});

app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
