import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import AllDevice from './AllDevice';

const Device = () => {
    const a = useLoaderData();
    const {_id, name, img} = a;
    
   

    const[booked,setBooked] = useState(null)
    console.log(booked)
    

    const [review, setreview] = useState([])
   
    useEffect(() => {
        fetch(`https://recycle-shop-server.vercel.app/reviewss?category=${_id}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [_id])
   
    return (
        <div className='single-course-container review-detail'>
            <h1 className='mt-5 text-3xl font-semi-bold'>Category:{name}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
            {
                            review.map(devices => <AllDevice
                                key={devices._id}
                                
                                devices={devices }
                                setreview={setreview}
                                setBooked={setBooked}
                            > </AllDevice>)
                        }
            </div>
            {  booked &&
            <BookingModal 
            booked={booked}
            ></BookingModal>
            }
            
     
        </div>
    );
};

export default Device;