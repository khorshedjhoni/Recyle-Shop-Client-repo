import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddSingleProduct from '../AddSingleProduct/AddSingleProduct';
import BookingModal from '../BookingModal/BookingModal';

const AddProduct = () => {
    const products = useLoaderData();
    
    return (
        <div>
        {
            products.map(product=> <AddSingleProduct
            key={product._id}
            product={product}
            >    
            </AddSingleProduct>)
        }
     
</div>
    );
};

export default AddProduct;