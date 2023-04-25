import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

function socials() {
    return (
        <Layout>
            <Head>
                {siteTitle}
            </Head>
             
        <div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <div class="text-center">
                <h2 class="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">Follow Us on Instagram</h2>
                <p class="font-normal text-base leading-6 dark:text-black text-black mt-4 lg:w-5/12 md:w-9/12 mx-auto">Follow us on instagram @<span class="underline cursor-pointer">followuspleaseee</span> and tag us to get featured on our timeline</p>
            </div>
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
                <div class="relative group">
                    <img src="https://i.ibb.co/QHS8Ngp/pexels-alana-sousa-3294250-1.png" alt="A picture of a sitting dog" class="lg:block hidden w-full" />
                    <img src="https://i.ibb.co/mNPBgQN/pexels-alana-sousa-3294250-1-1.png" alt="A picture of a sitting dog" class="lg:hidden block w-full" />
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram" />
                    </div>
                </div>
                <div class="relative group">
                    <img src="https://i.ibb.co/T8jgRy3/pexels-leah-kelley-1449667-1.png" alt="Smiling Girl" class="lg:block hidden w-full" />
                    <img src="https://i.ibb.co/YD8nNMR/pexels-leah-kelley-1449667-1-1.png" alt="Smiling Girl" class="lg:hidden block w-full" />
                    <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram" />
                    </div>
                </div>
                <div class="relative group">
                    <img src="https://i.ibb.co/F3dzNWD/pexels-spencer-selover-775358-1.png" alt="Men Posing" class="lg:block hidden w-full" />
                    <img src="https://i.ibb.co/myWxfSm/pexels-spencer-selover-775358-1-1.png" alt="Men Posing" class="lg:hidden block w-full" />
                    <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram" />
                    </div>
                </div>
                <div class="relative group">
                    <img src="https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png" alt="2 puppies" class="lg:block hidden w-full" />
                    <img src="https://i.ibb.co/5cDQZ2r/pexels-chevanon-photography-1108099-1-1.png" alt="2 puppies" class="lg:hidden block w-full" />
                    <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram" />
                    </div>
                </div>
            </div>
        </div>
    
        </Layout>
    )
}

export default socials;