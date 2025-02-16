import React from "react";
import sateliteimg  from "../../assets/image/satelite1.jpg";

const Banner = () => {
    return (
        <div className="bg-black text-white pb-12 relative z-50">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                        <img data-aos="zoom-in" src={sateliteimg} alt="" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" />
                    </div>
                    <div className="space-y-3 xl:pr-36 p-4 border-b-2 border-r-sky-800 border-b-sky-800">
                        <p data-aos="fade-up" className="text-sky-800 uppercase">Our Mission</p>
                        <h1 data-aos="fade-up"  className="uppercase text-5xl">Satellite</h1>
                        <p data-aos="fade-up" data-aos-delay="500">A satellite is an object that orbits a planet or star. It can be natural (like the Moon) or artificial (human-made for communication, navigation, weather, or research). Satellites collect data, transmit signals, and monitor Earth. They play a crucial role in GPS, internet, space exploration, and military surveillance. </p>
                        <a href="https://en.wikipedia.org/wiki/Satellite">
                        <button data-aos="fade-up" data-aos-delay="700" className="primary-button ">Learn More
                        </button>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
