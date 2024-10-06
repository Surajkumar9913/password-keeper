import React from "react";

const Navbar = () => {
    return (
        <div className="bg-blue-950 py-4 text-white flex justify-around items-center">
            <h1 className="text-xl font-bold">
                <span className="text-yellow-300">&lt;</span>Pass
                <span className="text-yellow-300">Keeper/&gt;</span>
            </h1>

            <a href="https://github.com/Surajkumar9913" target="_blank" className=" font-bold border-2 border-yellow-300 rounded-full px-6 py-2 "><i className="fa-brands fa-github"></i> GitHub</a>
        </div>
    );
};

export default Navbar;
