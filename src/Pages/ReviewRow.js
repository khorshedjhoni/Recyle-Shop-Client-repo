
import Loading from './Loading/Loading';
import React, { useContext, useEffect, useState } from 'react';
// import  { useContext,   } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';


const ReviewRow = ({x, handleDelete,isLoading}) => {
    const { _id, category, userName, email, deviceModel, PhotoURL, uses,oPrice, date} = x;
    // console.log(x)

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://recycle-shop-server.vercel.app/allmobile');
            const data = await res.json();
            return data;
        } 
    });
    const handleAdvertisement = id => {
        fetch(`https://recycle-shop-server.vercel.app/allmobile/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Advertise successful.')
                refetch();
            }
        })
    }

   
    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`https://recycle-shop-server.vercel.app/allmobile`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [])




    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div className='flex items-center border-solid'>
            <p className=''>Model: {deviceModel}</p>
        <img className='w-40 rounded-full' src={PhotoURL} alt="" />
        <h2>Price:{oPrice}</h2>
        <button onClick={() => handleDelete(_id)} className='blog-container mt-5 mb-5'>❌Delete</button>
        {
            review.map(a =><div className='d-flex align-items-center' key={a._id}>
            
            { a?.addV !== 'advertise'  && <button onClick={() => handleAdvertisement(_id)} className='bt ms-5 m-1 btn-primary miya1'>Advertise</button>} 
           
            
          </div>)
      }
    </div>
);
    
};

export default ReviewRow;

