import React from 'react'

export default function projects() {
    return (
        <div className="h-screen bg-white dark:bg-black">
            <div className="bg-white shadow-xl dark:bg-gray-900 flex items-center justify-center h-20">
                <h1 className="text-black dark:text-white font-extrabold text-4xl">PROJECTS</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-4 ml-10">
                <div className="border-purple-500 border-2 border-opacity-20 rounded-lg hover:border-opacity-50 transition duration-500">
                    <div>
                        <img src="treeosis.png" className="h-40 w-40 p-4" />
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-black dark:text-white font-extrabold text-4xl p-2">TREEOSIS</h1>
                        <div className="p-4">
                            <button className="text-white p-2 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 hover:opacity-100 transition duration-1000 rounded font-bold ">VISIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
