module.exports = (req, res) => {
  const express = require("express");
  const cors = require("cors");
  const nodemailer = require("nodemailer");

  const app = express();

  app.use(
    cors({
      origin: "https://codesala.vercel.app",
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
    })
  );

  app.use(express.json());

  app.post("/contact", async (req, res) => {
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

      const contactEmail = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      contactEmail.sendMail(mail, (error) => {
        if (error) {
          return res
            .status(500)
            .json({ status: "ERROR", message: "Failed to send email" });
        }
        return res.json({ status: "Message Sent" });
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "ERROR", message: "Internal Server Error" });
    }
  });

  app.listen(3000, () => {
    console.log("Server Running on port 3000");
  });

  app(req, res);
};
