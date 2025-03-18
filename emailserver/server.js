/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// const corsOptions = {
//   origin: ["https://codesalaofficial.vercel.app", "http://localhost:5173"],
// };

app.use(
  cors({
    origin: "https://codesala.vercel.app",
    methods: ["GET", "POST"],
  })
);

app.options("*", cors());

app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(" Error while sending the message", error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", async (req, res) => {
  try {
    const { firstname, lastname, email, phone, requirements } = req.body;

    if (!firstname || !email || !requirements) {
      return res
        .status(400)
        .json({ status: "ERROR", message: "Missing fields" });
    }

    const mail = {
      from: firstname,
      to: process.env.EMAIL,
      subject: "Contact Form Submission",
      html: `<p>FirstName:<b>${firstname}</b></p>
             <p>LastName: ${lastname}</p>
             <p>Email: ${email}</p>
             <p>Phone no: ${phone}</p>
             <p>Requirements: ${requirements}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.error("Email Error:", error);
        return res
          .status(500)
          .json({ status: "ERROR", message: "Failed to send email" });
      }
      return res.json({ status: "Message Sent" });
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ status: "ERROR", message: "Internal Server Error" });
  }
});

console.log("Email:", process.env.EMAIL);
console.log("Password:", process.env.EMAIL_PASSWORD ? "Loaded" : "Not Loaded");

app.listen(5000, () => console.log("Server Running"));
