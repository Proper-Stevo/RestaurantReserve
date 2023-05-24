const reservationNumber = Math.floor(Math.random() * 100000)// Generate a random reservation number
const nodemailer = require("nodemailer");
require("dotenv").config();
// const fs = require("fs");
// const path = require("path");
// const { promisify } = require("util");

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { guests, names, date, time, email } = req.body;
        // const imagePath = path.join(__dirname, "../../../../public/images/borderblk.png"); // Replace with the actual path to your image file
        // const resFrontPath = path.join(__dirname, "../../../../public/images/ResFront.png")
        // const readFileAsync = promisify(fs.readFile);

        try {
            const transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASS,
                },
            });


            // try {
            const mailOptions = {
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
                <img src="cid:ResFont" alt="Restuaraunt" width="400px" height="400px" class="center" />
                </center>
                </div>
                </body>`,
                // attachments: [
                //     {
                //         filename: "borderblk.png", // Replace with the filename you want to use for the background image
                //         path: imagePath,
                //         cid: "borderblk", // CID reference for the background image
                //         contentDisposition: "inline",
                //         contentType: "image/png",
                //     },
                //     {
                //         filename: "ResFont.png", // Replace with the filename you want to use for the restaurant image
                //         path: resFrontPath,
                //         cid: "ResFont", // CID reference for the restaurant image
                //         contentDisposition: "inline",
                //         contentType: "image/png",
                //     },
                // ],
            };


            const info = await transporter.sendMail(mailOptions);
            res.status(200).json({ reservationNumber }); // Return the reservation number to the client
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

