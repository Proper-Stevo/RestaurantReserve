import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function (req, res) {
  const { guests, names, date, time, email } = req.body;
  const reservationNumber = Math.floor(Math.random() * 100000);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });


    const sendMail = {
      from: "South Central With Love <southcentralwithlove@gmail.com>",
      to: email,
      subject: "Reservation Confirmation",
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }
    .header {
      text-align: center;
      padding: 20px;
      background-color: #4a4a4a;
      color: white;
      border-radius: 8px 8px 0 0;
    }
    .content {
      background-color: white;
      padding: 30px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .reservation-details {
      margin: 20px 0;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #666;
      font-size: 14px;
    }
    .restaurant-name {
      font-size: 24px;
      font-weight: bold;
      margin: 10px 0;
    }
    .confirmation-number {
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 4px;
      margin: 15px 0;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Reservation Confirmed!</h1>
    </div>
    <div class="content">
      <p>Dear ${names},</p>
      <p>Thank you for choosing to dine with us. Your reservation has been confirmed.</p>
      
      <div class="reservation-details">
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p><strong>Time:</strong> ${time}</p>
      </div>

      <div class="confirmation-number">
        <p><strong>Reservation Number:</strong></p>
        <h2>#${reservationNumber}</h2>
      </div>

      <div class="restaurant-name">
        South Central, With Love
      </div>

      <div class="footer">
        <p>We look forward to serving you!</p>
        <p>If you need to make any changes, please contact us at (XXX) XXX-XXXX</p>
        <p style="color: #999; font-size: 12px;">Please save this email for your records.</p>
      </div>
    </div>
  </div>
</body>
</html>
`
    };



    const info = await transporter.sendMail(sendMail);
    console.log("email sent" + info.response);
    res.status(200).json({ reservationNumber, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false })
  }
}