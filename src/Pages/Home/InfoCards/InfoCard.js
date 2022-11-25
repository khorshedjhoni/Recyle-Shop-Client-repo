import React from 'react';

const InfoCard = ({card}) => {
    const { name, details, icon, } = card;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl bg-primary`}>
            <figure className='bg-danger'>
                <img  src={icon} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;