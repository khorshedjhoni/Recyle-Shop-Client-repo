import React from 'react';

const AllDevice = ({devices}) => {
    const { userName, email, deviceModel, PhotoURL, location, rPrice, oPrice, uses, date } = devices ;
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
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default AllDevice;