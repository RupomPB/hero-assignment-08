import React from 'react';

import review from '/review.png'
import download from '/download.png'

const AllApp = ({allapps}) => {
    // console.log(allapps)

    const {title,downloads, reviews, image } =allapps;

    return (
        <div>
           <div className=' p-4 h-100 space-y-3 shadow-xl rounded-2xl'>
                       <div className='flex justify-center items-center p-2  border-1 border-gray-200 rounded-2xl'>
                           <img className='w-[250px] h-[250px] object-cover text-center' src={image}></img>
                       </div>
                       <h1 className='text-2xl font-bold text-center'>{title
           }</h1>
                       <div className='flex justify-between font-semibold'>
                           <p className='flex items-center gap-1 btn'><img src={download}></img> <span className=' text-green-400'>{downloads}</span></p>
           
                           <p className='btn flex items-center gap-1'> <img src={review}></img><span className=' text-orange-500'>{reviews}</span></p>
                       </div>
                   </div>
        </div>
    );
};

export default AllApp;