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
            <Parallax className='reserveIMG' bgImage='/images/resereved.jpeg' strength={600}>
                <section className='pt-60'>
                    <div className='relative py-20'>
                        <div className='text-center text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-9xl lg:text-10xl'>Reservations</div>
                    </div>
                </section>
            </Parallax>  
            <Reserve />
           <SecondReserve />
        </Layout>
    )
}

export default reservations;

