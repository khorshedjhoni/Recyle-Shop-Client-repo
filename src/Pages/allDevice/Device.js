import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllDevice from './AllDevice';

const Device = () => {
    const a = useLoaderData();
    const {_id, name, img} = a;

    const [review, setreview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviewss?categories=${_id}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [_id])

    console.log(a);

    return (
        <div className='single-course-container review-detail'>
            <h1 className='d-grid justify-content-center bg-danger mb-5 p-2'>Category:{name}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
            {
                            review.map(devices => <AllDevice
                                key={devices ._id}
                                devices={devices }
                            ></AllDevice>)
                        }
            </div>

        </div>
    );
};

export default Device;