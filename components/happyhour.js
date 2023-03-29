import React from "react";

function HappyHr() {
    return (
        <>
        <h1 className="text-center text-white pt-5 text-xl">Happy Hour Section</h1>
            <div class="grid grid-cols-3 gap-4 text-brown text-center py-20">
                <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                    <img src="/images/tacos.jpg" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                    <div class="bg-white shadow-2xl rounded-b-3xl">
                        <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">Tacos</h2>
                        <div class="w-5/6 m-auto">
                            <p class="text-center text-gray-500 pt-5 pb-4">You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!</p>
                        </div>
                    </div>
                </div>
                <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                    <img src="/images/nachos.jpg" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                    <div class="bg-white shadow-2xl rounded-b-3xl">
                        <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">Nachos</h2>
                        <div class="w-5/6 m-auto">
                            <p class="text-center text-gray-500 pt-5 pb-4">You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!</p>
                        </div>
                    </div>
                </div>
                <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                    <img src="/images/calimari.jpg" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                    <div class="bg-white shadow-2xl rounded-b-3xl">
                        <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">Calimari</h2>
                        <div class="w-5/6 m-auto">
                            <p class="text-center text-gray-500 pt-5 pb-4">You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HappyHr;