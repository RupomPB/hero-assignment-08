import React, { lazy, Suspense } from 'react';
import { useLoaderData } from 'react-router';



const AllApp =lazy(()=>import('./../AllApp/AllApp'))

const AllApps = () => {

    const allAppsData = useLoaderData();
    console.log(allAppsData)

    return (
        <div className=' max-w-7xl mx-auto'>
            <h1 className="text-center font-bold text-5xl my-5">Our All Applications</h1>
            <p className="text-center">Explore All Apps on the Market developed by us. We code for Millions</p>

            <Suspense fallback={
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></div>
            <span className="ml-2 text-purple-500">Loading...</span>
          </div>
        }>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        allAppsData.map((allapps)=><AllApp allapps={allapps} key={allapps.id}></AllApp>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default AllApps;