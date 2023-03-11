import React from "react";
import { Parallax } from 'react-parallax'; 

function Bar() {
    return (
        <>
        <Parallax className='bgImage2' bgImage="/images/barSection.jpg" strength={900}>
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
        </div>
        </Parallax>
        </>
    )
}

export default Bar;