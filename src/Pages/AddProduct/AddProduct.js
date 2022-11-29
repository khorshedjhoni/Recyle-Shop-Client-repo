import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddSingleProduct from '../AddSingleProduct/AddSingleProduct';

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