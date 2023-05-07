// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
require("dotenv").config();

app.use(bodyParser.json());

app.post('/api/api', async (req, res) => {
  const { guests, names, date, time, email } = req.body;

  // Generate a random reservation number
  const reservationNumber = Math.floor(Math.random() * 10000);

  // Send an email to the customer with the reservation confirmation
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to: email,
    subject: 'Reservation Confirmation',
    html: `<p>Welcome to My Restaurant! 
    Your reservation number is ${reservationNumber}. We look forward to seeing you on ${date} at ${time}.</p>`,
  };

  await transporter.sendMail(mailOptions);

  res.json({ reservationNumber });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
