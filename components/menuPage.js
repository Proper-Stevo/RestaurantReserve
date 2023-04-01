import React from "react";
import foodMenu from "../data/menuSelection.json"

function MainMenu() {

    const displayMenu = foodMenu.map((m, index) => {
        return (
            <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src={m.image} alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                <div class="bg-white shadow-2xl rounded-b-3xl">
                    <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">{m.title}</h2>
                    <div class="w-5/6 m-auto">
                        <p class="text-center text-gray-500 pt-5 pb-4">{m.description}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="text-center">
            <h1 className="text-center text-white pt-5 text-5xl">Food Section</h1>
            <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800 bg-white">
                <input id="Toggle3" type="checkbox" className="hidden peer" />
                    <span className="px-4 py-2 rounded-l-md dark:bg-blue-400 peer-checked:dark:bg-gray-300">Food</span>
                    <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-blue-400">Drinks</span>
            </label>
            <div class="grid grid-cols-3 gap-4 text-brown text-center py-20">
                {displayMenu}
            </div>
        </div>
    )
}

export default MainMenu;