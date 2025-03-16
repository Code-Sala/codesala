/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const corsOptions = {
  origin: "https://codesalaofficial.vercel.app",
};

app.use(cors(corsOptions));
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

router.post("/contact", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const requirements = req.body.requirements;
  const mail = {
    from: firstname,
    to: process.env.EMAIL,
    subject: "Contact Form Submission",
    html: `<p>FirstName: ${firstname}</p>
    <p>LastName: ${lastname}</p>
             <p>Email: ${email}</p>
             <p>Requirements: ${requirements}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

console.log("Email:", process.env.EMAIL);
console.log("Password:", process.env.EMAIL_PASSWORD ? "Loaded" : "Not Loaded");

app.listen(5000, () => console.log("Server Running"));
