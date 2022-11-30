import React from 'react';
import img from '../../image/404-error-page-not-found.jpg'

const NotFound = () => {
    return (
        <div className='mx-auto'>
            <h2 className='text-danger text-3xl'>404 Not Found Your Data</h2>
            <img className='flex justify-center items-center' src={img} alt="" />
           
        

        </div>
    );
};

export default NotFound;