import React from 'react'
import { SubHeader, MenuItem } from '@/components';
import data from '@/constants/data';
import Image from 'next/image';
import './MenuSec.scss';

const Menu = () => {

  const breakfastItems = data?.breakfast || [];
  const lunchItems = data?.lunch || [];

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
            {breakfastItems.map((breakfastItem, index) => (
              <div key={breakfastItem.title + index} className='app__menu-items'>
                <MenuItem title={breakfastItem.title} price={breakfastItem.price} desc={breakfastItem.desc} />
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
            {lunchItems.map((lunchItem, index) => (
              <div key={lunchItem.title + index} className='app__menu-items'>
                <MenuItem title={lunchItem.title} price={lunchItem.price} desc={lunchItem.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
