import React from "react";

function Info() {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 bg-[#e6d7d6] text-brown text-center">
                <div>
                    <br />
                <img className="mx-auto" src="/images/addy.png" />
                   <b> Address:</b>
                    <p>
                        1992 <br />
                        Santa Monica, <br />
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
                    Email: Steven.barrios92@gmail.com <br /> 
                    Phone: 323.719.0378
                </div>
            </div>
        </>
    )
}

export default Info;