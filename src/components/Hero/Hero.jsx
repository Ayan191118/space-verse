import React from "react";
import moon from "../../assets/image/moon-surface.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center itrms-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-20">
          <div className="space-y-4 lg:pr-36" >
            <h1 className="text-5xl font-bold uppercase mt-20">Orbit The Galaxy </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti fuga possimus placeat minima laborum similique nemo, eos, itaque dolorum sapiente officiis eveniet assumenda voluptatum? Impedit hic amet unde dolores iste iusto quis, similique veritatis nihil dolorem vitae deleniti. Numquam ullam quos sit ab illo optio?</p>
            <button className="bg-white text-black hover:bg-blue-900/40 hover:text-white px-4 py-1 my-4 rounded-md duration-200">Explore Space</button>
          </div>
          <div></div>
        </div>
      </div>
      {/* surgace section */}
      <img src={moon} alt="" className="absolute right-0 bottom-0 w-full brightness-50 z-10" />
      {/* {bottom gradient section} */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  )
}

export default Hero
