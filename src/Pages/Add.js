import React from 'react';
import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Add = () => {


    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`https://recycle-shop-server.vercel.app/allmobile`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [])
    




    return (
        <div className=' flex flex-col-reverse mt-10 '>
           
                            {
                                review.map((a) =><div className='' key={a._id}>
                                
                                
                                <>
                            {
                                a?.addV?
                                    <>
                                      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
  <figure><img className='w-100' src={a.PhotoURL}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{a.deviceModel}</h2>
    <p>Price:{a.rPrice}</p>
   
  </div>
</div>
                                          
                                    </>
                                    :
                                    <>
                                        
                                    </>
                            }

                        </>
                                    </div>)
                            }

                        </div>
    );
};

export default Add;
