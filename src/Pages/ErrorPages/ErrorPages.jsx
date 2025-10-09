import React from 'react';
import errorpage from "../../assets/errorpage.png"
import { Navigate, useNavigate } from 'react-router';

const ErrorPages = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center text-center space-y-5 my-10'>
            <img src={errorpage}></img>
            <h1 className=' font-bold text-3xl '> This page note found</h1>
            <p className=' text-gray-500 font-semibold'>The page you are looking for is not available.</p>
            <button onClick={()=> navigate(-1)} className='btn my-3 bg-gradient-to-r from-[#6E37E6FF] to-[#9559F0FF] font-semibold text-xl text-white'>Go Back</button>
        </div>
    );
};

export default ErrorPages;