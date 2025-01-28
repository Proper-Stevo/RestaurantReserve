import React from "react";
import { Parallax } from 'react-parallax';

function Info() {
    return (
        <>
            <Parallax className="tacosBG" bgImage="/images/tacos.png">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-brown text-center py-20">
                <div>
                    <br />
                <img className="mx-auto" src="/images/addy.png" />
                   <b> Address:</b>
                    <p>
                        123 Fake Street <br />
                        Hollywood, <br />
                        California 
                    </p>
                </div>
                <div>
                    <br />
                    <img className="mx-auto" src="/images/hours.png" />
                    <b>Hours:</b>
                    <p>
                        M-Th: 10am-9pm <br />
                        F: 7am-11pm <br />
                        Sat: 8am-1am <br />
                        Sun: 9am-3pm
                    </p>
                </div>
                <div>
                    <br />
                <img className="mx-auto" src="/images/contact.png" />
                <b>Contact:</b>
                 <br />
                    Email: <a href="mailto:Steven.barrios92@gmail.com" className="text-blue-700">Steven.barrios92@gmail.com</a><br /> 
                    Phone: (555)555-5555
                </div>
                </div>
            </Parallax>
        </>
    )
}

export default Info;
