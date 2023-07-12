// ItemDetail.jsx

import React from 'react';
import './ItemDetail.scss';
import Image from 'next/image';
import data from '@/constants/data';

const ItemDetail = () => {

    return (
        <section className='menu-items flex__center section__padding app__bg'>
            <h2 className='headtext__cormorant'>The Food You've Been Craving</h2>
            <div className='menu-items__tabs'>
                {['breakfast', 'lunch', 'drinks'].map((item, index) => (
                    <p className='p__cormorant' key={index}>{item}</p>
                ))}
            </div>
            <div className='menu-items__cards'>
                    
            </div>
        </section>
    )
}

export default ItemDetail;
