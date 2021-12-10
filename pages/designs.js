import React from 'react'

export default function designs() {
    return (
        <div className="bg-black h-screen text-white">
            <div className="bg-white shadow-xl dark:bg-111 flex items-center justify-center h-20">
                <h1 className="text-black dark:text-white font-extrabold text-4xl">DESIGNS</h1>
            </div>

            <h1 className="text-black dark:text-white font-extrabold text-3xl p-6">Buttons</h1>
            <div>
                <div>
                    <button className="m-6 p-2 bg-prired rounded-md shadow-prired hover:shadow-priredb transition duration-200">CLICK ME</button>
                    <button className="m-6 p-2 border-prired border-4 rounded-md shadow-prired hover:shadow-priredb transition duration-200">CLICK ME</button>
                </div>
                <div>
                    <button className="m-6 p-2 bg-priblue rounded-md shadow-priblue hover:shadow-priblueb transition duration-200">CLICK ME</button>
                    <button className="m-6 p-2 border-priblue border-4 rounded-md shadow-pribluein hover:shadow-priblueinb transition duration-200">CLICK ME</button>
                </div>
            </div>

            <h1 className="text-black dark:text-white font-extrabold text-3xl p-6">Cards</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                <div className="m-6 p-2 border-purple-500 border-4 border-opacity-20 rounded-lg hover:border-opacity-50 transform rotate-2 hover:rotate-0 transition duration-500">
                    <h1 className="font-bold text-2xl">This is a simple Card!</h1>
                    <h1 className="font-bold text-xl pt-4 pb-2">Hover me!</h1>
                </div>
                <div className="m-6 p-2 border-purple-500 border-4 border-opacity-20 rounded-lg hover:border-opacity-50 transform -rotate-1 hover:rotate-0 transition duration-500">
                    <h1 className="font-bold text-2xl">This is a simple Card!</h1>
                    <h1 className="font-bold text-xl pt-4 pb-2">Hover me!</h1>
                </div>
                <div className="m-6 p-2 border-purple-500 border-4 border-opacity-20 rounded-lg hover:border-opacity-50 transform -rotate-3 hover:rotate-0 transition duration-500">
                    <h1 className="font-bold text-2xl">This is a simple Card!</h1>
                    <h1 className="font-bold text-xl pt-4 pb-2">Hover me!</h1>
                </div>
                <div className="m-6 p-2 border-purple-500 border-4 border-opacity-20 rounded-lg hover:border-opacity-50 transform rotate-6 hover:rotate-0 transition duration-500">
                    <h1 className="font-bold text-2xl">This is a simple Card!</h1>
                    <h1 className="font-bold text-xl pt-4 pb-2">Hover me!</h1>
                </div>
                <div className="m-6 p-2 border-purple-500 border-4 border-opacity-20 rounded-lg hover:border-opacity-50 transform -rotate-1 hover:rotate-0 transition duration-500">
                    <h1 className="font-bold text-2xl">This is a simple Card!</h1>
                    <h1 className="font-bold text-xl pt-4 pb-2">Hover me!</h1>
                </div>
                <div className="m-6 p-2 border-purple-500 border-4 border-opacity-20 rounded-lg hover:border-opacity-50 transform -rotate-3 hover:rotate-0 transition duration-500">
                    <h1 className="font-bold text-2xl">This is a simple Card!</h1>
                    <h1 className="font-bold text-xl pt-4 pb-2">Hover me!</h1>
                </div>
                <div className="m-6 p-2 border-purple-500 border-4 border-opacity-20 rounded-lg hover:border-opacity-50 transform -rotate-1 hover:rotate-0 transition duration-500">
                    <h1 className="font-bold text-2xl">This is a simple Card!</h1>
                    <h1 className="font-bold text-xl pt-4 pb-2">Hover me!</h1>
                </div>
                <div className="m-6 p-2 border-purple-500 border-4 border-opacity-20 rounded-lg hover:border-opacity-50 transform -rotate-3 hover:rotate-0 transition duration-500">
                    <h1 className="font-bold text-2xl">This is a simple Card!</h1>
                    <h1 className="font-bold text-xl pt-4 pb-2">Hover me!</h1>
                </div>
            </div>
        </div>
    )
}
