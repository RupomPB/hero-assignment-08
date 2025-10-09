import React from 'react';
import review from '/review.png'
import download from '/download.png'
import { Link } from 'react-router';



const App = ({singleApp}) => {
    // console.log(singleApp)
    return (
        <Link to={`/appdetails/${singleApp.id}`}>
            <div className=''>

        <div className=' p-4 h-100 space-y-3 shadow-lg rounded-2xl'>
            <div className='flex justify-center items-center p-2  border-1 border-gray-200 rounded-2xl'>
                <img className='w-[250px] h-[250px] object-cover text-center' src={singleApp.image}></img>
            </div>
            <h1 className='text-2xl font-bold text-center'>{singleApp.title
}</h1>
            <div className='flex justify-between font-semibold'>
                <p className='flex items-center gap-1 btn'><img src={download}></img> <span className=' text-green-400'>{singleApp.downloads}</span></p>

                <p className='btn flex items-center gap-1'> <img src={review}></img><span className=' text-orange-500'>{singleApp.reviews}</span></p>
            </div>
        </div>

        

        </div>
        </Link>
    );
};

export default App;