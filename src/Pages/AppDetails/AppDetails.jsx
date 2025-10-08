import React from 'react';
import { useLoaderData, useParams } from 'react-router';


import review from '/review.png'
import download from '/download.png'
import totalreview from '/totalreview.png'
import Recharts from '../Recharts/Recharts';
const AppDetails = () => {


    const {id} = useParams();
    const appId = parseInt(id);

    const data = useLoaderData();
    const singleApp = data.find(app =>app.id === appId);
    console.log(singleApp)
    
    const {image, title, ratings, ratingAvg, downloads, description, reviews,companyName } =singleApp

    return (

        <div>


        <div className=' max-w-7xl mx-auto flex gap-20 border-b-1 border-gray-300 my-10 pb-4'>
            <div>
                <img src={image}></img>
            </div>

            <div className=' space-y-6'>
                <div className=' border-b-1 border-gray-300 pb-4'>
                    <h1 className='text-2xl font-bold text-center'>{title}</h1>
                <p className=' text-lg font-semibold text-center'>Developed by: {companyName}</p>
                </div>

                <div className='flex justify-between gap-22'>

                    <div className=' flex flex-col items-center'>
                        <img className='w-8' src={download}></img>
                        <p className=' font-semibold '>Downloads</p>
                        <h1 className=' text-2xl font-bold'>{downloads}</h1>
                    </div>

                    <div  className=' flex flex-col items-center'>
                        <img className='w-8' src={review}></img>
                        <p  className=' font-semibold '>Average Ratings</p>
                        <h1 className=' text-2xl font-bold'>{ratingAvg}</h1>
                    </div>

                    <div  className=' flex flex-col items-center'>
                        <img className='w-8' src={totalreview}></img>
                        <p  className=' font-semibold '>Total Reviews</p>
                        <h1 className=' text-2xl font-bold'>{reviews}</h1>
                    </div>

                </div>

                <div>
                    <button className=' bg-[#00d390] text-white py-2 px-5 btn'> Install Now </button>
                </div>
            </div>
        </div>

        <Recharts ratings={ratings}></Recharts>
        </div>
        
    );
};

export default AppDetails;