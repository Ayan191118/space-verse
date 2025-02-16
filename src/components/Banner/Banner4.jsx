import React from "react";
import starsimg  from "../../assets/image/stars.jpg";

const Banner2 = () => {
    return (
        <div className="bg-black text-white pb-12 relative z-50">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    
                    <div className="space-y-3 xl:pr-36 p-4 border-b-2 border-l-sky-800 border-b-sky-800">
                        <p data-aos="fade-up" className="text-sky-800 uppercase">Our Mission</p>
                        <h1 data-aos="fade-up" data-aos-delay="400" className="uppercase text-5xl"> Stars</h1>
                        <p data-aos="fade-up" data-aos-delay="500">Stars are massive, luminous spheres of plasma held together by gravity. They form from clouds of gas and dust, generating energy through nuclear fusion. Stars vary in size, temperature, and brightness, with types ranging from red dwarfs to supergiants. They play a crucial role in the universe, creating elements necessary for life. Eventually, stars evolve, some becoming white dwarfs, neutron stars, or black holes, shaping the cosmos for future generations. </p>
                        <a href="https://en.wikipedia.org/wiki/Star">
                        <button data-aos="fade-up" data-aos-delay="700" className="primary-button ">Learn More</button>
                        </a>
                    </div>
                    <div data-aos="zoom-in">
                        <img src={starsimg} alt="" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2;