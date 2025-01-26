import React from "react";
import sateliteimg  from "../../assets/image/satelite1.jpg";

const Banner = () => {
    return (
        <div className="bg-black text-white pb-12 relative z-50">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                        <img src={sateliteimg} alt="" />
                    </div>
                    <div className="space-y-3 xl:pr-36 p-4 border-b-2 border-r-sky-800 border-b-sky-800">
                        <p className="text-sky-800 uppercase">Our Mission</p>
                        <h1 className="uppercase text-5xl">Rapidcast</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore, tempora alias corporis error sapiente! Quo nisi officiis repudiandae perspiciatis eligendi deserunt Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quibusdam suscipit similique dolor? Alias, cumque? </p>
                        <button className="primary-button ">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
