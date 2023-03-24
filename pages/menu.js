import React from "react";
import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import { Parallax } from "react-parallax";

function menu() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Parallax bgImage="/images/border.png" className="container mx-auto">
            <section className="pt-20">
                <div className="container py-20">
                    <h1 className=" text-center text-2xl">Menu Specials</h1>
                    <div className=" py-20 columns-1 md:columns-4 sm:columns-2">
                        <div class="flex justify-center">
                            <div class="block w-64 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                <a href="#!">
                                    <img
                                        class="rounded-t-lg w-64"
                                        src="/images/tacos.jpg"
                                        alt="" />
                                </a>
                                <div class="p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        Tacos
                                    </h5>
                                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        Freshly hand maid flour tortillas, your choice of meat, topped with house made guacamole and your choice
                                        of salsa.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="block w-64 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                <a href="#!">
                                    <img
                                        class="rounded-t-lg w-64"
                                        src="/images/tacos.jpg"
                                        alt="" />
                                </a>
                                <div class="p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        Tacos
                                    </h5>
                                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        Freshly hand maid flour tortillas, your choice of meat, topped with house made guacamole and your choice
                                        of salsa.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="block w-64 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                <a href="#!">
                                    <img
                                        class="rounded-t-lg w-64"
                                        src="/images/tacos.jpg"
                                        alt="" />
                                </a>
                                <div class="p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        Tacos
                                    </h5>
                                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        Freshly hand maid flour tortillas, your choice of meat, topped with house made guacamole and your choice
                                        of salsa.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="block w-64 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                <a href="#!">
                                    <img
                                        class="rounded-t-lg w-64"
                                        src="/images/tacos.jpg"
                                        alt="" />
                                </a>
                                <div class="p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        Tacos
                                    </h5>
                                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        Freshly hand maid flour tortillas, your choice of meat, topped with house made guacamole and your choice
                                        of salsa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Parallax>
        </Layout>
    )
}

export default menu;