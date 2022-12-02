import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../Context/AuthProvider';
import Loading from '../Loading/Loading';

const BookingModal = ({booked,isLoading,}) => {
  const { name,userName, img,deviceModel,oPrice,rPrice
  } = booked;
  const { user } = useContext(AuthContext);
  console.log(booked)

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    // const item = form.item.value;
    const name = form.name.value;
    const location = form.location.value;
    const email = form.email.value;
    const model = form.model.value;
    const price = form.price.value;
    const phone = form.phone.value;
    
    const booking = {
       
        User:name,
        // item,
        location,
        email,
        model,
        phone,
        price,
    }

    
    fetch('https://recycle-shop-server.vercel.app/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                
                toast.success('Booking confirmed');
                //  
               
            }
            else{
                
            }
        })


}

if(isLoading){
  return <Loading></Loading>
}
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  
   
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        
                       
                        
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='model' type="text" disabled defaultValue={booked.deviceModel} className="input w-full input-bordered " />
                        <input name='price' type="text" disabled defaultValue={rPrice} className="input w-full input-bordered " />
                        
                        
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input  name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
  </div>
</div>
        </>
    );
};

export default BookingModal;