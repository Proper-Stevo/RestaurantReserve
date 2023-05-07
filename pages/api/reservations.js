

const nodemailer = require("nodemailer");
require("dotenv").config();

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { guests, names, date, time, email } = req.body;

        try {
            const transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: "laresturaunt@gmail.com",
                    pass: "ftlrjatxfgexudgp",
                },
            });

            // try {
            const mailOptions = {
                from: "laresturaunt@gmail.com",
                to: email,
                subject: "Reservation Confirmation",
                html: `Thank you ${names} for making a reservation for ${guests} guests on ${date} at ${time}. Your reservation number is ${Math.floor(Math.random() * 100000)}.`,
            }

            const info = await transporter.sendMail(mailOptions);
            const reservationNumber = Math.floor(Math.random() * 100000); // Generate a random reservation number
            res.status(200).json({ reservationNumber }); // Return the reservation number to the client

            res.status(200).json({ message: "Reservation confirmed!" + info.response + reservationNumber});
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

