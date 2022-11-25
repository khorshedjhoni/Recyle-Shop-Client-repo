import React from 'react';
import InfoCard from './InfoCard';
import image1 from '../../../image/clock3.png'
import image2 from '../../../image/location 2.png'
import image3 from '../../../image/contact.png'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            details: 'Open 10.00 am to 5.00pm everyday',
            icon: image1,
            
        },
        {
            id: 2,
            name: 'Our Locations',
            details: '07 Road,house no-3,Banani,Dhaka',
            icon: image2,
           
        },
        {
            id: 3,
            name: 'Contact Us',
            details: 'Phone:01234222235',
            icon: image3,
            
        },
    ]
    return (
        <div className='grid mt-5  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;