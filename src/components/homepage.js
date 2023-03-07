import React from 'react';
import FrontRest from "../img/FrontRes.jpg"
import { Parallax } from 'react-parallax';
import Nav from "./nav"

function Home() {
    return (
        <Parallax className='bgImage' bgImage={FrontRest} strength={900}>
            <Nav />
            <div className='contentHome text-center' id="home">
                <span>
                    <h1 className="ResTitle">Resturant Name Goes Here</h1>
                    <p>Los Angeles Best New Resturant</p>
                </span>
            </div>
        </Parallax>
    )
};

export default Home;