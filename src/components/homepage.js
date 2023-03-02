import React from 'react';
import FrontRest from "../img/FrontRes.jpg"
import { Parallax } from 'react-parallax';
import Nav from "./nav"

function Home() {
    return (
        <Parallax className='bgImage' bgImage={FrontRest} strength={900}>
            <Nav />
            <div className='contentHome'>

                <p>Resturant Name Goes Here</p>

            </div>
        </Parallax>
    )
};

export default Home;