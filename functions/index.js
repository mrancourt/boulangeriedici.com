/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {https} = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const EMAIL = "071D17560E3DB17F@gmail.com";

const app = express();
// Set up CORS with allowed origins
app.use(cors({origin: ["https://boulangeriedici.com", "http://localhost:3000", "http://localhost:3001"]}));

/**
 * Returns if an email is valid
 * @param {email} email to validate
 * @return {boolean} is email valid
 */
function isValidEmail(email) {
  // Regular expression to test the structure of most email addresses.
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "071D17560E3DB17F",
    pass: "xuzx wegh gfdh bwgy",
  },
});

app.post("/", (req, res) => {
  const {requestEmail, requestName, message} = req.body;

  if (!requestName) {
    return res.status(400).send(
        "Veuillez entrer votre nom.",
    );
  }
  if (!requestEmail) {
    return res.status(400).send(
        "Veuillez entrer votre courriel.",
    );
  }
  if (!isValidEmail(requestEmail)) {
    return res.status(400).send(
        "Veuillez entrer une adresse courriel valide.",
    );
  }
  if (!message) {
    return res.status(400).send(
        "Veuillez entrer votre question ou commentaire.",
    );
  }

  const mailOptions = {
    from: EMAIL,
    to: EMAIL,
    replyTo: requestEmail,
    subject: "Nouveau message d’un client",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; 
                  margin: auto; border: 1px solid #ccc; padding: 15px;">
        <h2 style="color: #333;">Nouveau message de ${requestName}</h2>
        <p><strong>Email de l'expéditeur:</strong> ${requestEmail}</p>
        <hr>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr>
        <p><em>Vous pouvez répondre directement à cet email pour 
        contacter ${requestName}.</em></p>
      </div>
        `,
  };

  mailTransport.sendMail(mailOptions)
      .then(() => {
        res.status(200).send("Email sent successfully");
      })
      .catch((error) => {
        console.error("There was an error while sending the email:", error);
        res.status(500).send(error);
      });
});

exports.sendEmail = https.onRequest(app);
