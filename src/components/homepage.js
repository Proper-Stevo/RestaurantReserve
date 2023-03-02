import React from 'react';
import FrontRest from "../img/FrontRes.jpg"
import { Parallax } from 'react-parallax';
import Nav from "./nav"

function Home() {
    return (
        <Parallax className='bgImage' bgImage={FrontRest} strength={800}>
            <Nav />
            <div className='contentHome'>

                <h1>Welcome To my resturant</h1>

            </div>
        </Parallax>
    )
};

export default Home;