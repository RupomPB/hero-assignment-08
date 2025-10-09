import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const Recharts = ({ratings}) => {

    // console.log(ratings)
    return (
        
        <div style={{width:'100%', height:600}} className=' max-w-7xl mx-auto w-full h-[300px] md:h-[500px] lg:h-[600px]'>

            <ResponsiveContainer width='100%' height='100%'>


            <BarChart data={ratings}  layout='vertical' >
            
                <XAxis type='number'  ></XAxis>
                <YAxis type='category' dataKey='name' ></YAxis>
                
                <Bar  dataKey='count' fill="#ff8811"></Bar>
            </BarChart>

            </ResponsiveContainer>
        </div>
    );
};

export default Recharts;