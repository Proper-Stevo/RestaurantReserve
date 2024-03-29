import React, { useEffect, useState } from "react";
import happyHR from "../data/happyHR.json";


function HappyHr() {

    const [selectFood, setselectFood] = useState([]);

    useEffect(() => {
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffle(happyHR);
        const newSelectedItems = happyHR.slice(0, 3);
        setselectFood(newSelectedItems);
    }, []);

    return (
        <>
            <h1 className="text-center text-white pt-8 text-5xl">Happy Hour Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-brown text-center py-20">
                {selectFood.map((k, index) => (
                    <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm" key={index}>
                        <img src={k.image} alt="happy hour food!" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                        <div className="bg-white shadow-2xl rounded-b-3xl">
                            <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">{k.title}</h2>
                            <div className="w-5/6 m-auto">
                                <p className="text-center text-gray-500 pt-5 pb-4">{k.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HappyHr;