import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

function about() {
    return (
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <div class="container my-24 px-6 mx-auto">

                    <section class="mb-32 text-gray-800 text-center">
                        <h2 class="text-6xl font-bold mb-12 text-white">Meet the team</h2>

                        <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">
                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />

                                <p class="font-bold mb-2">John Doe</p>
                                <p class="text-gray-500">General Manager</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />

                                <p class="font-bold mb-2">Lisa Ferrol</p>
                                <p class="text-gray-500">Assitant Manager</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Maria Smith</p>
                                <p class="text-gray-500">Excecutive Chef</p>
                            </div>
                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Agatha Bevos</p>
                                <p class="text-gray-500">Sous Chef</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Darren Randolph</p>
                                <p class="text-gray-500">Pastry Chef</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Soraya Letto</p>
                                <p class="text-gray-500">Kitchen Manager</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/10.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Maliha Welch</p>
                                <p class="text-gray-500">Bartender</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/11.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Zeynep Dudley</p>
                                <p class="text-gray-500">Line Cook</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/12.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Avaya Hills</p>
                                <p class="text-gray-500">Host</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/13.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Thierry Fischer</p>
                                <p class="text-gray-500">Barback</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/14.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Aisling Sheldon</p>
                                <p class="text-gray-500">Cashier</p>
                            </div>

                            <div class="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p class="font-bold mb-2">Ayat Black</p>
                                <p class="text-gray-500">Dishwasher</p>
                            </div>
                        </div>
                    </section>

                </div>
            </Layout>
    )
}

export default about;