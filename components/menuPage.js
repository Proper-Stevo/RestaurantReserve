import React, { useState } from "react";
import foodMenu from "../data/menuSelection.json"
import drinksMenu from "../data/drinksMenu.json"

function MainMenu() {
    const [isFood, setisFood] = useState(true);

    const displayDrinks = [drinksMenu];
    const displayMenu = [foodMenu];

    const handleClick = () => {
        setisFood(!isFood);
    }
    return (
        <div className="text-center">
            <h1 className=" text-white pt-5 text-5xl">Entree | Drinks</h1>
            <label htmlFor="Toggle3" className="inline-flex items-center p-5 pl-4 rounded-md cursor-pointer text-gray-800">
                <input id="Toggle3"
                    type="checkbox"
                    className="hidden peer"
                    checked={isFood}
                    onChange={handleClick}
                />
                <span className="px-4 py-2 rounded-l-md bg-gray-200 peer-checked:bg-blue-300">Entree</span>
                <span className="px-4 py-2 rounded-r-md bg-blue-200 peer-checked:bg-gray-300">Drinks</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 text-brown text-center py-20">
                
                {isFood ? (
                    foodMenu.map((m, index) => {
                        return (
                            <div className="flex">
                                <div className="flex-1 h-full"> 
                            <div className="h-full w-80 h-max mt-24 m-auto lg:mt-16 max-w-sm" key={index}>
                                <img src={m.image} alt="User Images" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                                <div className="bg-white shadow-2xl rounded-b-3xl">
                                    <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">{m.title}</h2>
                                    <div className="w-5/6 m-auto">
                                        <p className="text-center text-gray-500 pt-5 pb-4">{m.description}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        )
                    })
                ) : (
                    drinksMenu.map((d, index) => {
                        return(
                        <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm" key={index}>
                            <img src={d.image} alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                            <div className="bg-white shadow-2xl rounded-b-3xl">
                                <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">{d.title}</h2>
                                <div className="w-5/6 m-auto">
                                    <p className="text-center text-gray-500 pt-5 pb-4">{d.description}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default MainMenu;