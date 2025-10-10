import React from "react";

import heroImg from '../../assets/hero.png'
import playstore from '/playstore.png'
import appstore from '/appstore.png'

const Banner = () => {
  return (

    <>


    <div className="flex flex-col items-center justify-center text-center pt-20">
      <div className=" space-y-3">
        <div className="space-y-6">
          <h1 className=" text-5xl font-bold ">
            We Build <br></br><span className=" text-[#8d5aec]"> Productive</span> Apps
          </h1>
          <p className=" text-gray-500 ">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, <br></br> smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className=" space-y-5 flex justify-center gap-3">
        <a href="https://play.google.com/store/games?device=windows" target="blank">

            <button className="btn p-6 rounded-xl"><img src={playstore}></img> Google Play</button>
        </a>
        <a href="https://www.apple.com/app-store/" target="blank">

            <button className="btn p-6 rounded-xl"> <img src={appstore}></img> App Store</button>
        </a>

        </div>
      </div>
      <div>
        <img src={heroImg}></img>


        
      </div>
    </div>

    <div className=" bg-gradient-to-r from-[#6E37E6FF] to-[#9559F0FF] py-10">
        <h1 className=" text-4xl text-white font-semibold py-5 text-center">Trusted by Millions, Built for You</h1>

        <div>


        <div className="flex flex-row   lg:flex justify-around items-center  gap-5 py-4 pb-10  max-w-7xl mx-auto">
            <div className=" space-y-2 text-center">
              <p className=" text-sm text-gray-200">Total Downloads</p>
              <h1 className=" text-5xl font-bold text-white">29.6M</h1>  
              <p className=" text-sm text-gray-200">21% more than last month</p>
            </div>
              <div className=" space-y-2 text-center">
              <p className=" text-sm text-gray-200">Total Reviews</p>
              <h1 className=" text-5xl font-bold text-white">906K</h1>  
              <p className=" text-sm text-gray-200">46% more than last month</p>
            </div>
             <div className=" space-y-2 text-center">
              <p className=" text-sm text-gray-200">Active Apps</p>
              <h1 className=" text-5xl font-bold text-white">132+</h1>  
              <p className=" text-sm text-gray-200">31 more will Launch</p>
            </div>
        </div>


        </div>

        </div>
    </>
  );
};

export default Banner;
