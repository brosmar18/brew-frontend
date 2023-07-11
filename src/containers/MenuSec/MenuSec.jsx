'use client';

import React, { useState } from 'react'
import { SubHeader, MenuItem } from '@/components';
import data from '@/constants/data';
import Image from 'next/image';
import './MenuSec.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import Modal from 'react-modal';

const Menu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1); 

  const allItems = [...data.breakfast, ...data.lunch]; 

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setCurrentIndex(-1);
    setModalIsOpen(false);
  }

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const goForward = () => {
    if (currentIndex < allItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      border: 'none',
      overflow: 'auto'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // This creates a darkened background
      zIndex: 100
    }
  };

  return (
    <div className="app__specialMenu flex__center section__padding app__bg" id="menu">
      <div className="app__specialMenu-title">
        <SubHeader title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Our Menu</h1>
      </div>
      <div className='menu__img-overlay flex__center'>
        <Image src='/mug.png' alt='mug' width={312} height={320} />
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_breakfast  flex__center">
          <p className="app__specialMenu-menu_heading">Breakfast</p>
          <div className="app__specialMenu_menu_items">
            {data && data.breakfast && data.breakfast.map((breakfastItem, index) => (
              <div key={breakfastItem.title + index} className='app__menu-items'>
                <MenuItem title={breakfastItem.title} price={breakfastItem.price} desc={breakfastItem.desc} />
                <button type="button" className="custom__button app__menu-button" onClick={() => openModal(index)}>View Item</button>
              </div>
            ))}
          </div>
        </div>

        <div className='menu__spatula flex__center'>
          <Image src='/spatula.png' alt='spatula' width={107} height={910} />
        </div>

        <div className="app__specialMenu-menu_lunch  flex__center">
          <p className="app__specialMenu-menu_heading">Lunch</p>
          <div className="app__specialMenu_menu_items">
            {data && data.lunch && data.lunch.map((lunchItem, index) => (
              <div key={lunchItem.title + index} className='app__menu-items'>
                <MenuItem title={lunchItem.title} price={lunchItem.price} desc={lunchItem.desc} />
                <button type="button" className="custom__button app__menu-button" onClick={() => openModal(data.breakfast.length + index)}>View Item</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <ItemDetail 
            item={allItems[currentIndex]} 
            closeModal={closeModal} 
            goBack={goBack} 
            goForward={goForward} 
            showBackArrow={currentIndex > 0} 
            showForwardArrow={currentIndex < allItems.length - 1} 
        />
      </Modal>
    </div>
  )
}

export default Menu;
