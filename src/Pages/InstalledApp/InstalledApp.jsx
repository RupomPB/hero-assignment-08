import React from "react";
import review from "/review.png";
import download from "/download.png";

const InstalledApp = ({ installedApp, handleUninstall }) => {
  const { image, title, downloads, reviews, size, id } = installedApp;
  console.log(installedApp);
  return (
    <div >
        <div>

      <div className="flex justify-between bg-white gap-11 m-5 rounded-3xl ">
        <div className="flex">
            <div className="flex items-center justify-center p-3">
          <img className="w-20 h-20 " src={image}></img>
        </div>

        <div className=" w-70 flex flex-col gap-4 p-3">
          <h1 className=" font-bold text-xl">{title}</h1>

          <div className="  flex justify-around items-center ">
            <div className="flex gap-1.5 text-green-400 font-bold">
                <img src={download}></img>
                <p >{downloads}</p>
            </div>
            <div className="flex gap-1.5 font-bold">
                <img src={review}></img>
                <p>{reviews}</p>
            </div>
            <div >
                <p className=" text-gray-500">{size} MB</p>
            </div>

          </div>

        </div>
        </div>
        <div className="m-8">
        <button onClick={()=>handleUninstall(id)} className=" font-semibold bg-green-400 text-white btn text-lg">Uninstall</button>
      </div>
       
      </div>

       
      
        </div>
    </div>
  );
};

export default InstalledApp;
