import React from 'react';
import image from '../../../image/phone sell.jpg'

const Banner = () => {
    return (
        <div className=" hero px-10">
  <div className="hero-content flex-col lg:flex-row-reverse px-20 ">
    <img src={image} className=" max-w-full rounded-lg shadow-2xl" alt=''/>
    <div className='max-w-full ms-0'>
      <h1 className="  text-5xl font-bold">Design and Display <br /> It's all screen!</h1>
      <p className="py-6">Introducing fashionable & gorgeous phone Form design and use <br /> It's all screen</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;