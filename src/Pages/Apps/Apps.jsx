import React, { lazy, Suspense } from "react";
import { Link } from "react-router";

const App = lazy(() => import("../App/App"));

const Apps = ({ data }) => {
  return (
    <div className=" max-w-7xl mx-auto">
      <h1 className="text-center font-bold text-5xl my-5">Trending Apps</h1>
      <p className="text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></div>
            <span className="ml-2 text-purple-500">Loading...</span>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.slice(0,8).map((singleApp) => (
            <App singleApp={singleApp} key={singleApp.id}></App>
          ))}
        </div>
        <div className="text-center m-3">
            <Link to='/apps'>
                <button className='text-white bg-gradient-to-r from-[#6E37E6FF] to-[#9559F0FF] py-2 px-5 text-3xl rounded-lg'>Show all </button>
            </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;
