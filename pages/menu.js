import React from "react";
import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import { Parallax } from "react-parallax";
import HappyHr from "../components/happyhour";
import NextSection from "../components/happyh2";
import MainMenu from "../components/menuPage";


function menu() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Parallax className="menuImg" bgImage="/images/wood.jpg" strength={800}>
                <section className="pt-60">
                    <div className="relative py-20">
                        <div className="text-center text-6xl font-bold tracking-tight text-white sm:text-6xl md:text-9xl lg:text-10xl">Menu Specials</div>
                    </div>
                </section>
            </Parallax>
            <HappyHr />
            <NextSection />
            <MainMenu />
        </Layout>
    );
}

export default menu;