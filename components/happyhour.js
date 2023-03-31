import React from "react";
import happyHR from "../data/happyHR.json";


function HappyHr() {

    const displayFood = happyHR.map((k, index) => {
        return (
        <div className="grid grid-cols-3 gap-4 text-brown text-center py-20">
            <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src={k.image} alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                <div className="bg-white shadow-2xl rounded-b-3xl">
                    <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">{k.title}</h2>
                    <div className="w-5/6 m-auto">
                        <p className="text-center text-gray-500 pt-5 pb-4">{k.description}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
        )

return (
    <>
        <h1 className="text-center text-white pt-8 text-5xl">Happy Hour Section</h1>
        {displayFood}
    </>
)
}

export default HappyHr;