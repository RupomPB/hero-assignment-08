import React, { lazy, Suspense, useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router';

import apperror from '../../assets/apperror.png'

const AllApp =lazy(()=>import('./../AllApp/AllApp'))

const AllApps = () => {

    const navigate = useNavigate();
    const allAppsData = useLoaderData();
    console.log(allAppsData)

    const [searchApp, setSearchApp] = useState('');

    const filterApps = allAppsData.filter(app =>app.title.toLowerCase().includes(searchApp.toLocaleLowerCase()));


    return (
        <div className=' max-w-7xl mx-auto'>
            <h1 className="text-center font-bold md:text-5xl my-5 ">Our All Applications</h1>
            <p className="text-center">Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className='flex  justify-between  m-2 '>
            <h1 className=' font-bold md:text-xl'>({allAppsData.length}) Apps Found</h1>
            {/* search apps  */}

            <input className='border-1 border-gray-300 rounded-xl py-1 md:px-3 md:py-1' type='text' placeholder='Search Apps' value={searchApp} onChange={(e)=>setSearchApp(e.target.value)}></input>

        </div>
            <Suspense fallback={
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></div>
            <span className="ml-2 text-purple-500">Loading...</span>
          </div>
        }>
                {
                    filterApps.length > 0 ?(
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
                    {
                        filterApps.map((allapps)=><AllApp allapps={allapps} key={allapps.id}></AllApp>)
                    }
                </div>
                    ):(
                        <div className='flex flex-col justify-center items-center'>
                            <img src={apperror}></img>
                            <h1 className='text-3xl my-3 font-bold'>OPPS!! APP NOT FOUND</h1>
                            <p className=' font-semibold text-gray-500 '>The App you are requesting is not found on our system.  please try another apps</p>
                            
                                <button onClick={()=> navigate(-1)} className='btn my-5 bg-gradient-to-r from-[#6E37E6FF] to-[#9559F0FF] font-semibold text-xl text-white'>Go Back</button>
                            
                        </div>
                    )
                }
            </Suspense>
        </div>
    );
};

export default AllApps;