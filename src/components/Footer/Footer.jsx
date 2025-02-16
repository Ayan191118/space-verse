import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-gray-800 text-white px-5 relative z-50">
      <section className=" max-w-[1200px] mx-auto text-white ">
        <div className="grid md:grid-cols-3 gap-4 py-5">
          {/* /first col */}
          <div>
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">Be Ready To Grow</h1>
            <p>Get Exclusive <span className="font-bold">
              Update </span>
               straight to your inbox
              </p>
              <br />
              <div className="flex items-center h-10"><input type="text" placeholder="Email Address" className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2" />
              <button className="primary-button">Go</button>
              </div>
          </div>
          {/* second col */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-3 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick links</h1>
                <ul className="flex flex-col gap-3">
                   <li>
                    <a href="#">Home</a>
                   </li>
                   <li>
                    <a href="#">About</a>
                   </li>
                   <li>
                    <a href="#">Services</a>
                   </li>
                   <li>
                    <a href="#">Login</a>
                   </li>
                </ul>
              </div>
            </div>
           < div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                   <li>
                    <a href="#">Home</a>
                   </li>
                   <li>
                    <a href="#">About</a>
                   </li>
                   <li>
                    <a href="#">Services</a>
                   </li>
                   <li>
                    <a href="#">Login</a>
                   </li>
                </ul>
              </div>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Contact Us</h1>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 ">
                <HiLocationMarker/>
                <p>Bopal,Madhya Pradesh</p>
                </div>
              <div className="flex items-center gap-3 mt-3">
                <MdMessage/>
                <p>spaceverse@gmail.com</p>
                </div>
              <div className="flex items-center gap-3 mt-3 ">
                <MdCall/>
                <p>+91 7782344577</p>
                </div>
              </div>

            </div>
          </div>
          {/* third col */}
          <div className="hidden sm:block">

          <div className="flex-justify-between items-center py-6 border-t-2 border-gray-400">
            <span className="text-sm text-gray-400"> copyreight @copy:2024 by spaceverse

            </span>
            <div className="flex items-center justify-center gap-4 m-4">
              <a href="#"><FaInstagram className="text-4xl"/></a>
              <a href="#"><FaFacebook className="text-4xl"/></a>
              <a href="#"><FaLinkedin className="text-4xl"/></a>
            
            </div>
          </div>
          <span className="text-sm text-gray-400">
            <ul className="flex gap-3">
              <li>Privacy Policy</li>
              <li>Terms and Conditions </li>
            </ul>
          </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
