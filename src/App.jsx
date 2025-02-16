import React from "react";
import bgvVideo from "./assets/image/earth1.mp4"
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner3 from "./components/Banner/Banner3";
import Banner4 from "./components/Banner/Banner4";


const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  
  });
  
  return (
    <div>
        <div className="h-[700px] relative">
          <video 
          autoPlay 
          loop
          muted 
          className="absolute right-0 top-0 w-full h-[700px] object-cover -z-10">
           < source src={bgvVideo} type="video/mp4"/>
          </video>
          <Navbar/>
          <Hero/>

        </div>
        {/* Services Card Section */}
        <Services/>
        
        <Banner />
        <Banner2 />
        <Banner3/>
        <Banner4/>
        <Footer />
    </div>
  )
}

export default App
