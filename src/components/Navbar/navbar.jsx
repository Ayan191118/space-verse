import React from "react";
import logo from "/src/assets/image/logo3.png";

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 w-full right-0
            z-[99] bg-black/10 backdrop-blur-sm py-30 sm:py-4">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className=" flex  text-white items-center gap-4 font-bold text-1.7xl">
                            <img src={logo} alt="" className="w-10 " />
                            <span>SPACEVERSE</span>
                        </div>
                        <div className="text-white">
                            <ul className="flex items-center gap-4 text-xl py-4 ">
                                <li>
                                    <a href="#">Home </a> 
                                </li>
                                <li>
                                    <a href="#">Entities </a> 
                                </li>
                                <li>
                                    <a href="#">Satellites </a> 
                                </li>
                                <li>
                                    <a href="#">About Us </a> 
                                </li>
                                 
                            </ul>
                        </div>
                        <div>
                            <button className="text-white border-2 border-white px-3 py-1 rounded-md">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
                  