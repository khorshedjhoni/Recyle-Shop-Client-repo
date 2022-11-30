import React from 'react';

const ReviewRow = ({x, handleDelete}) => {
    const { _id, category, userName, email, deviceModel, PhotoURL, uses,oPrice, date} = x;
    console.log(x)
    return (
        <div className='done'>
            <img className='review-img' src={PhotoURL} alt="" />
            <div className='d-flex align-items-center'>
            <p><span className='okkk'>Model: </span>{deviceModel}</p>
            <button onClick={() => handleDelete(_id)} className='blog-container mt-5 mb-5'>❌Delete</button>
            </div>
        </div>
    );
};

export default ReviewRow;