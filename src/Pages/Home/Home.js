import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Add from '../Add';
import HomeCategory from '../HomeCategory/HomeCategory';
import Footer from '../Share/Footer/Footer';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='mx-5'>
            <Banner></Banner>
           <InfoCards></InfoCards>
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 my-10'>
                {
                    services.map(service => <HomeCategory
                    key={service._id}
                    service={service}
                    >    
                    </HomeCategory>)
                }
            </div>
           <div >
           <h2 className='text-xl font-bold'>Advertisement</h2>
            <Add></Add>
           </div>
        </div>
    );
};

export default Home;