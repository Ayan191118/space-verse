import React from "react";
import sunimage  from "../../assets/image/sun.jpg";

const Banner = () => {
    return (
        <div className="bg-black text-white pb-12 relative z-50">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                        <img data-aos="zoom-in" src={sunimage} alt="" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" />
                    </div>
                    <div className="space-y-3 xl:pr-36 p-4 border-b-2 border-r-sky-800 border-b-sky-800">
                        <p data-aos="fade-up" className="text-sky-800 uppercase">Our Mission</p>
                        <h1 data-aos="fade-up"  className="uppercase text-5xl"> Our Sun </h1>
                        <p data-aos="fade-up" data-aos-delay="500">The Sun is a massive, glowing ball of hot gases at the center of our solar system. It provides light, heat, and energy essential for life on Earth. Composed mainly of hydrogen and helium, the Sun drives weather, seasons, and photosynthesis. Without it, life as we know it wouldn’t exist. </p>
                        <a href="https://en.wikipedia.org/wiki/Sun">
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