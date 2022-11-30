import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../Loading/Loading';

const AllDevice = ({devices,setBooked,setreview,isLoading}) => {
    const { userName, email, deviceModel, PhotoURL, location, rPrice, oPrice, uses, date } = devices ;
    

    
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    
    return (
        <div className='mx-auto ' >
          
            <div className="card w-96 bg-base-100 shadow-xl  mx-auto mt-5 ">
  <figure className="px-10 pt-10">
    <img src={PhotoURL} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Device Model: {deviceModel}</h2>
    <p>Seller Name: {userName}</p>
            
            <p>Location: {location}</p>
            <p>Resale Price: {rPrice}</p>
            <p>Original Price: {oPrice} </p>
            <p>Years of Use: {uses}</p>
            <p>Post Date: {date}</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Book Now</button>
      <a href="#my-modal-2" className="btn">open modal</a> */}
      <label htmlFor="booking-modal" 
      onClick={()=>setBooked(devices)} className="btn btn-primary">Book Now</label>
    </div>
    
  </div>
</div>

        </div>
    );
};

export default AllDevice;