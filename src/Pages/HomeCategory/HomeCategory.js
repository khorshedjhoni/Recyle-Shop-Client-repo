import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategory = ({service}) => {
    const {image, name, _id } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-5">
  <figure><img src={image} alt="category" /></figure>
  <div className="card-body">
    <h2 className="text-3xl font-semi-bold text-center">{name}</h2>
   
    <div className="card-actions justify-center">
      <Link to={`/allmobile/${_id}`}><button className="btn btn-primary">View All</button></Link>
    </div>
  </div>
</div>
    );
};

export default HomeCategory;