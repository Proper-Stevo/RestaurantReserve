import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

function about() {
    return (
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <div className="container py-32 px-6 mx-auto">

                    <div className=" text-gray-800 text-center">
                        <h2 className="text-6xl font-bold mb-12 text-white">Meet the team</h2>

                        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">
                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />

                                <p className="font-bold mb-2">John Doe</p>
                                <p className="text-white">General Manager</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />

                                <p className="font-bold mb-2">Lisa Ferrol</p>
                                <p className="text-white">Assitant Manager</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb- 2">Maria Smith</p>
                                <p className="text-white">Excecutive Chef</p>
                            </div>
                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Agatha Bevos</p>
                                <p className="text-white">Sous Chef</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Darren Randolph</p>
                                <p className="text-white">Pastry Chef</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Soraya Letto</p>
                                <p className="text-white">Kitchen Manager</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/10.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Maliha Welch</p>
                                <p className="text-white">Bartender</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/11.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Zeynep Dudley</p>
                                <p className="text-white">Line Cook</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/12.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Avaya Hills</p>
                                <p className="text-white">Host</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/13.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Thierry Fischer</p>
                                <p className="text-white">Barback</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/14.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Aisling Sheldon</p>
                                <p className="text-white">Cashier</p>
                            </div>

                            <div className="mb-12">
                                <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Ayat Black</p>
                                <p className="text-white">Dishwasher</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
    )
}

export default about;