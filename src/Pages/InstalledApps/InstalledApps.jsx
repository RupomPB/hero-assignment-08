import React, { Suspense, useEffect, useState } from "react";

import { getInstalledApp } from "../../Utility/addToDB";
import InstalledApp from "../InstalledApp/InstalledApp";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router";

const InstalledApps = () => {

    const [sort, setSort] = useState('');


    const handleSort =(type)=>{
      setSort(type);
      if(type ==="Size"){
        const sortedBySize = [...installedList].sort((a,b)=>a.size - b.size);
        setInstalledList(sortedBySize);
      }
      if(type ==="Ratings"){
        const sortByRating =[...installedList].sort((a,b) =>{
          const getNumber = (value) =>{
            if( typeof value === 'string'){
              if(value.includes('M'))return parseFloat(value) * 1000000;
              if(value.includes('B'))return parseFloat(value )* 1000000000;

              return parseFloat(value);
            }
            return value
          }
          return getNumber(a.reviews ) - getNumber(b.reviews)
        });

        setInstalledList(sortByRating);
      }
    }

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

        toast.success('App Uninstalled Successfully',{})

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
        
        <div className="flex justify-between items-center">
          <h1 className=" font-semibold text-xl"> ({installedList.length}) Apps Found</h1>

          <details className="dropdown ">
  <summary className="btn m-1 text-lg">Sort by: {sort? sort: ''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('Size')}>Size</a></li>
    <li><a onClick={()=>handleSort('Ratings')}>Ratings</a></li>
  </ul>
</details>

        </div>


        <Suspense fallback={
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></div>
            <span className="ml-2 text-purple-500">Loading...</span>
          </div>
        }>


        <div>
            {
                installedList.map(a =><InstalledApp key={a.id}
                installedApp ={a}
                handleUninstall ={handleUninstall}
                ></InstalledApp>)
            }
        </div>

        </Suspense>
      </div>
    </div>
  );
};

export default InstalledApps;
