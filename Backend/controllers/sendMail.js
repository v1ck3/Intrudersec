import nodemailer from "nodemailer";

const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or "smtp-mail.outlook.com"
      auth: {
        user: "intrudersecacademy@gmail.com",
        pass: process.env.GMAILID, // NOT your Gmail password
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
};

export default {
  sendMail,
};