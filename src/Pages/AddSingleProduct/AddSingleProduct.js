import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { AuthContext } from '../Context/AuthProvider';
import { format } from 'date-fns';
import BookingModal from '../BookingModal/BookingModal';
import { useLocation, useNavigate } from 'react-router-dom';

const AddSingleProduct = ({product}) => {
    const {image, name, _id } = product;
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/dashboard/myproduct';
  

    
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    



    //Adding Review
    const handleSale = event =>{
        navigate(from,{replace:true})
        event.preventDefault();
        const form = event.target;
        const name1 = form.fName.value;
        const email = form.email.value;
        const deviceModel = form.dModel.value;
        const PhotoURL = form.ImageURL.value;
        const location = form.location.value;
        const rPrice = form.rPrice.value;
        const oPrice = form.oPrice.value;
        const uses = form.uses.value;
        const date = form.date.value;
        // console.log(form.ImageURL)
        // const image =event.ImageURL;
        
        
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res=>res.json())
        // .then(imgData=>{
        //     console.log(imgData)
        // })
        

        
        const rev = {
            category: _id,
            userName: name1,
            email,
            deviceModel,
            PhotoURL,
            location,
            rPrice,
            oPrice,
            uses,
            date
        }

        fetch('https://recycle-shop-server.vercel.app/allmobile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rev)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Product Added Successfully')
                form.reset();
            }
        })
        .catch(er => console.error(er));
    }
    const [sDate,setSDate] = useState(new Date());
    return (
        <div className='mb-5 flex justify-center items-center'>
            <div className='w-100 p-7 border-solid border-2 border-teal-800'>
            <h3 className=' text-info text-2xl'>Add your used phone for: {name}</h3>
            <div>
                <div >
               
                    <form onSubmit={handleSale}>
                        <div className='grid grid-cols-1 pt-5'>
                        <input name="fName"  type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" required  />
                        <input name="dModel" type="text" placeholder="Device Model"  className="input input-bordered w-full max-w-xs" required  />
                        <input name="location" type="text" placeholder="Location"   className="input input-bordered w-full max-w-xs" required  />
                        <input  name="rPrice" type="text" placeholder="Resale Price"   className="input input-bordered w-full max-w-xs" required  />
                        <input  name="oPrice" type="text" placeholder="Original Price"    className="input input-bordered w-full max-w-xs" required  />
                        <input  name="uses" type="text" placeholder="Years of Use"   className="input input-bordered w-full max-w-xs" required  />
                       
                        <input  name="date" type="text" placeholder="Selling Date" defaultValue={format(sDate, 'PP')} required readOnly   className="input input-bordered w-full max-w-xs"  />
                        <input  name="email" type="text" placeholder="Email" defaultValue={user?.email} required readOnly   className="input input-bordered w-full max-w-xs"  />
                        <input  name="ImageURL" type="text" placeholder="Image URL"  required   className="input input-bordered w-full max-w-xs"  />
                        

                        </div>
                        <button className="btn btn-success my-2 text-center flex items-center justify-center"  type="submit" value="Sell">sell</button>
                    
                    </form>
                </div> 
                
            </div>
        </div>
       
        </div>
    );
};

export default AddSingleProduct;