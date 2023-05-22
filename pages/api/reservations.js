const reservationNumber = Math.floor(Math.random() * 100000)// Generate a random reservation number
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
                from: "South Central With Love <laresturaunt@gmail.com>",
                to: email,
                subject: "Reservation Confirmation",
                html: `<body style="background-image: url('/images/borderblk.png');background-repeat: no-repeat;background-size: cover;">
                <div style="margin: 200px;">
                <h1 style="text-align: center;">Thanks ${names}!</h1>
                <h3 style="text-align: center;">Your reservation for ${guests} guests on ${date} at ${time}.</h3>
                <br />
                <h3 style="text-align: center;">Your reservation number is ${reservationNumber}.</h3>
                <br />
                <h1 style="text-align: center;">South Central, With Love</h1>
                <h4 style="text-align: center;">Look forward to seeing you soon!!</h4>
                <center>
                <img src="https://www.canva.com/design/DAFjlyxUDV0/5AJFSpcb6jJPf2KqpwaV8Q/view?utm_content=DAFjlyxUDV0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" alt="Restuaraunt" width="400px" height="400px" class="center" />
                </center>
                </div>
                </body>`,
            };


            const info = await transporter.sendMail(mailOptions);
            res.status(200).json({ reservationNumber }); // Return the reservation number to the client

            res.status(200).json({ message: "Reservation confirmed!" + info.response + reservationNumber });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

