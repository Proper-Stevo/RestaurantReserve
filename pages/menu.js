import React from "react";
import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import { Parallax } from "react-parallax";
import HappyHr from "../components/happyhour";
import NextSection from "../components/happyh2";


function menu() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Parallax className="menuImg" bgImage="/images/burger.jpg" strength={900}>
                <section className="pt-20">
                    <div className="container py-20">
                        <h1 className=" text-center text-white text-2xl">Menu Specials</h1>
                    </div>
                </section>
            </Parallax>
            <HappyHr />
            <NextSection />
        </Layout>
    )
}

export default menu;