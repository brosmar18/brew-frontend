import React from 'react';
import './ItemDetail.scss';
import Image from 'next/image';
import data from '@/constants/data';

const ItemDetail = () => {

    const renderCard = (item, index) => {
        return (
            <div key={index} className='card'>
                <Image src={item.imgUrl} alt={item.title} width={100} height={100} />
                <h3 className='p__cormorant' style={{color: '#DCCA87'}}>{item.title}</h3>
                <p className='p__cormorant'>{item.price}</p>
                <p className='p__opensans'>{item.desc}</p>
            </div>
        );
    };

    return (
        <section className='menu-items flex__center section__padding app__bg'>
            <h2 className='headtext__cormorant'>The Food You've Been Craving</h2>
            <div className='menu-items__tabs'>
                {['breakfast', 'lunch', 'drinks'].map((item, index) => (
                    <p className='p__cormorant' key={index}>{item}</p>
                ))}
            </div>
            <div className='menu-items__cards'>
                    {data.breakfast.map(renderCard)}
                    {data.lunch.map(renderCard)}
            </div>
        </section>
    )
}

export default ItemDetail;
