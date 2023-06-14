import React from 'react';
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { Parallax } from "react-parallax";
import Reserve from '../components/reservepage';
import SecondReserve from '../components/reserve2';

function reservations() {
    return (
        <Layout>
            <Head>
                {siteTitle}
             </Head>
            <div className='reserveIMG'>
                <section className='pt-60'>
                    <div className='relative py-20'>
                        <div className='text-center text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-9xl lg:text-10xl'>Reservations</div>
                    </div>
                </section>
            </div>  
            <Reserve />
           <SecondReserve />
        </Layout>
    )
}

export default reservations;

