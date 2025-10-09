import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../../Utility/addToDB";
import InstalledApp from "../InstalledApp/InstalledApp";

const InstalledApps = () => {

    const [installedList, setInstalledList] =useState([])

    const data = useLoaderData();
    console.log(data);

    useEffect(()=>{
        const installedAppsData = getInstalledApp();
        const convertedInstalledApps = installedAppsData.map(id =>parseInt(id));
        
        const installList = data.filter(app =>convertedInstalledApps.includes(app.id));
        setInstalledList(installList)

    },[]);

    const handleUninstall = (id) =>{
        const uninstallApps = installedList.filter(app=> app.id !== id);

        setInstalledList(uninstallApps);
        localStorage.setItem('installList', JSON.stringify(uninstallApps.map((app)=>app.id)) );

    }

    if(installedList.length === 0){
        return <p className="text-center text-gray-500 my-10 text-5xl font-semibold">No Apps Installed</p>
    }

  return (
    <div className=" bg-[#f5f5f5]">
      <div className=" text-center space-y-3 py-9 ">
        <h1 className=" text-5xl font-bold ">Your Installed Apps</h1>
        <p className=" text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className=" max-w-7xl mx-auto">
        <h1> {installedList.length} Apps Found</h1>

        <div>
            {
                installedList.map(a =><InstalledApp key={a.id}
                installedApp ={a}
                handleUninstall ={handleUninstall}
                ></InstalledApp>)
            }
        </div>

      </div>
    </div>
  );
};

export default InstalledApps;
