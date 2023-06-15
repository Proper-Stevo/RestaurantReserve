import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function(req, res) {
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
    html: `<body>
          <div style="margin: 200px;">
            <h1 style="text-align: center;">Thanks ${names}!</h1>
            <h3 style="text-align: center;">Your reservation for ${guests} guests on ${date} at ${time}.</h3>
            <br />
            <h3 style="text-align: center;">Your reservation number is ${reservationNumber}.</h3>
            <br />
            <h1 style="text-align: center;">South Central, With Love</h1>
            <h4 style="text-align: center;">Look forward to seeing you soon!!</h4>
            
          </div>
        </body>`,
  };

  
    
    const info = await transporter.sendMail(sendMail);
    console.log("email sent" + info.response);
    res.status(200).json({ reservationNumber , success: true });
} catch (error) {
    console.error(error);
    res.status(500).json({ success: false })
}}