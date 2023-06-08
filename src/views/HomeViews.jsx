import React from "react";
import { Link } from "react-router-dom";

export default function HomeViews() {
    return (
        <div className="h-screen flex bg-slate-100">
            <div className="flex flex-col justify-center p-4 h-full w-3/4">
                <p className="mb-2 text-5xl font-semibold">AZICHA BEAUTY SHOP</p>
                <h1 className="text-3xl mb-2">Brightening homes with beautiful, durable products.</h1>
                <div className="border-2 w-[15%] p-4 pl-10 rounded-md ml-8 shadow-lg mt-2 bg-yellow-800">
                <Link to="/facial" className="text-lg">SHOP NOW</Link>
                </div>
            </div>
            <div className="flex justify-end items-center h-full w-1/4">
                <img src="https://files.fm/thumb_show.php?i=cp2p8hvgy" alt="homepage-image" className="h-[100%] w-full object-cover mr-10" />
            </div>
        </div>
            
    )
}
