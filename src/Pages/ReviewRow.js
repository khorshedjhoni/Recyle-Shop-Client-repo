import React from 'react';
import Loading from './Loading/Loading';

const ReviewRow = ({x, handleDelete,isLoading}) => {
    const { _id, category, userName, email, deviceModel, PhotoURL, uses,oPrice, date} = x;
    console.log(x)

    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div className='flex items-center border-solid'>
            <p className=''>Model: {deviceModel}</p>
        <img className='w-40 rounded-full' src={PhotoURL} alt="" />
        <h2>Price:{oPrice}</h2>
        <button onClick={() => handleDelete(_id)} className='blog-container mt-5 mb-5'>❌Delete</button>
        <div className=' '>
        
        
        </div>
    </div>
);
    
};

export default ReviewRow;

