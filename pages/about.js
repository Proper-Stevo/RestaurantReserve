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
                        <p className="text-xl text-white">The exceptional staff at this establishment is a true testament to the notion of world-class service. With their unwavering dedication and impeccable attention to detail, they effortlessly create an unforgettable dining experience for every guest. From their warm and welcoming demeanor to their extensive knowledge of the menu, they go above and beyond to cater to individual preferences and ensure that every need is met. Their passion for hospitality shines through in their seamless coordination, efficiency, and genuine care, making them undeniably the best staff in the world.</p>
                        

                        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12 py-10">
                            <div className="mb-12">
                                <img src="../../../../public/images/manager.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />

                                <p className="font-bold mb-2">John Doe</p>
                                <p className="text-white">General Manager</p>
                            </div>

                            <div className="mb-12">
                                <img src="/images/Assistant.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />

                                <p className="font-bold mb-2">James Bond</p>
                                <p className="text-white">Assitant Manager</p>
                            </div>

                            <div className="mb-12">
                                <img src="/images/chef.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb- 2">John Smith</p>
                                <p className="text-white">Excecutive Chef</p>
                            </div>
                            <div className="mb-12">
                                <img src="/images/sousChef.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Trevor Johnson</p>
                                <p className="text-white">Sous Chef</p>
                            </div>

                            <div className="mb-12">
                                <img src="/images/pastryChef.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Darren Randolph</p>
                                <p className="text-white">Pastry Chef</p>
                            </div>

                            <div className="mb-12">
                                <img src="/images/kitchenManager.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Sam Letto</p>
                                <p className="text-white">Kitchen Manager</p>
                            </div>

                            <div className="mb-12">
                                <img src="/images/bartender.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Mathew Welch</p>
                                <p className="text-white">Bartender</p>
                            </div>

                            <div className="mb-12">
                                <img src="/images/lineCook.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
                                />
                                <p className="font-bold mb-2">Zeynep Dudley</p>
                                <p className="text-white">Line Cook</p>
                            </div>

                        </div>
                    </div>

                </div>
            </Layout>
    )
}

export default about;