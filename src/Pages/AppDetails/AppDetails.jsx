import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


import review from '/review.png'
import download from '/download.png'
import totalreview from '/totalreview.png'
import Recharts from '../Recharts/Recharts';
import { addToInstalledDB } from '../../Utility/addToDB';
import { toast } from 'react-toastify';
const AppDetails = () => {


    const [isInstalled, setIsInstalled] =useState(false)
    const {id} = useParams();
    const appId = parseInt(id);

    const data = useLoaderData();
    const singleApp = data.find(app =>app.id === appId);
    // console.log(singleApp)
    
    const {image, title, ratings, ratingAvg, downloads, description, reviews,companyName, size } =singleApp;


    const handleInstall = id =>{

        const isInstalled = addToInstalledDB(id);
        
        if(isInstalled){
            toast.success('App successfully Install',{
                autoClose: 2000
            })
            setIsInstalled(true)
        }
        else{
            toast.info("This app is already installed",{
                autoClose: 2000,
            });
            
           
        }
    }

    return (

        <div>


        <div className=' max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 border-b-1 border-gray-300 my-10 pb-4'>
            <div>
                <img className=' w-[250px]' src={image}></img>
            </div>

            <div className=' space-y-6'>
                <div className=' border-b-1 border-gray-300 pb-4'>
                    <h1 className='text-2xl font-bold text-center'>{title}</h1>
                <p className=' text-lg font-semibold text-center'>Developed by: <span className=' text-[#7c44e9]'>{companyName}</span></p>
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

        {/* install button */}
                <div className=''>
                    <button disabled={isInstalled} onClick={()=> handleInstall(id)} className=' bg-[#00d390] text-white py-2 px-5 btn'> {isInstalled ? 'Installed': 'Install Now'} ({size}MB) </button>
                </div>

            </div>
        </div>

        <Recharts ratings={ratings}></Recharts>

        <div className=' max-w-7xl mx-auto space-y-9 border-t-1 mt-10 border-gray-300 text-center md:text-left'>
            <h1 className=' font-bold text-4xl mt-10'>description</h1>
            <p style={{lineHeight:'2em'}} className=' text-gray-400 font-semibold mb-10'>{description}</p>
        </div>
        </div>
        
    );
};

export default AppDetails;