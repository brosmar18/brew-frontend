'use client';
import React, { useState } from 'react';
import './ItemDetail.scss';
import Image from 'next/image';
import data from '@/constants/data';

const ItemDetail = () => {
    const [activeTab, setActiveTab] = useState('breakfast');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const renderCard = (item, index) => {
        return (
            <div key={index} className='card'>
                <Image src={item.imgUrl} alt={item.title} width={250} height={250} />
                <h3 className='p__cormorant' style={{color: '#DCCA87'}}>{item.title}</h3>
                <p className='p__cormorant'>{item.price}</p>
                <p className='p__opensans'>{item.desc}</p>
            </div>
        );
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'breakfast':
                return data.breakfast.map(renderCard);
            case 'lunch':
                return data.lunch.map(renderCard);
            case 'drinks':
                return data.drinks.map(renderCard);
            default:
                return null;
        }
    };

    return (
        <section className='menu-items flex__center section__padding app__bg'>
            <h2 className='headtext__cormorant'>The Food You've Been Craving</h2>
            <div className='menu-items__tabs'>
                {['breakfast', 'lunch', 'drinks'].map((tabName, index) => (
                    <p 
                        className={`p__cormorant menu-items__tabs-item ${activeTab === tabName ? 'active' : ''}`} 
                        onClick={() => handleTabChange(tabName)}
                        key={index}
                    >
                        {tabName}
                    </p>
                ))}
            </div>
            <div className='menu-items__cards'>
                    {renderTabContent()}
            </div>
        </section>
    )
}

export default ItemDetail;
