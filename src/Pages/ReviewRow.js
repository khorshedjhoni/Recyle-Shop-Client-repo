import React from 'react';

const ReviewRow = ({x, handleDelete}) => {
    const { _id, category, userName, email, deviceModel, PhotoURL, uses,oPrice, date} = x;
    console.log(x)
    return (
        <div className='flex justify-items-center border-solid'>
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

{/* <button onClick={() => handleDelete(_id)} className='blog-container mt-5 mb-5'>❌Delete</button> */}
{/* <div className="w-24 rounded-full">
<img src={PhotoURL} alt="" />
</div> */}