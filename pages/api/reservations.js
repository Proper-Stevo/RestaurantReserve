import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

export default async function handler(req, res) {
  const { guests, names, date, time, email } = req.body;
  const reservationNumber = Math.floor(Math.random() * 100000);
  const imagePath = path.join(__dirname, "../../../../public/images/borderblk.png");
  const resFrontPath = path.join(__dirname, "../../../../public/images/ResFront.png");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const sendMail = {
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
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(sendMail, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ reservationNumber });
}
