const reservationNumber = Math.floor(Math.random() * 100000);
const nodemailer = require("nodemailer");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { guests, names, date, time, email } = req.body;
    const imagePath = path.join(__dirname, "../../../../public/images/borderblk.png");
    const resFrontPath = path.join(__dirname, "../../../../public/images/ResFront.png");

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

      await transporter.sendMail({
        from: "South Central With Love <laresturaunt@gmail.com>",
        to: email,
        subject: "Reservation Confirmation",
        html: `<body style="background-image: url('cid:borderblk');background-repeat: no-repeat;background-size: cover;">
          <div style="margin: 200px;">
            <h1 style="text-align: center;">Thanks ${names}!</h1>
            <h3 style="text-align: center;">Your reservation for ${guests} guests on ${date} at ${time}.</h3>
            <br />
            <h3 style="text-align: center;">Your reservation number is ${reservationNumber}.</h3>
            <br />
            <h1 style="text-align: center;">South Central, With Love</h1>
            <h4 style="text-align: center;">Look forward to seeing you soon!!</h4>
            <center>
              <img src="cid:ResFont" alt="Restaurant" width="400px" height="400px" class="center" />
            </center>
          </div>
        </body>`,
        attachments: [
          {
            filename: "borderblk.png",
            path: imagePath,
            cid: "borderblk",
            contentDisposition: "inline",
            contentType: "image/png",
          },
          {
            filename: "ResFont.png",
            path: resFrontPath,
            cid: "ResFont",
            contentDisposition: "inline",
            contentType: "image/png",
          },
        ],
      });

      return res.status(200).json({ reservationNumber });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
