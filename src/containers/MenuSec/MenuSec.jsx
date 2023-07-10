import React from 'react'
import { SubHeader, MenuItem } from '@/components';
import { data } from '@/constants';
import Image from 'next/image';
import './MenuSec.scss';

const Menu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding app__bg" id="menu">
      <div className="app__specialMenu-title">
        <SubHeader title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Our Menu</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_breakfast  flex__center">
          <p className="app__specialMenu-menu_heading">Breakfast</p>
          <div className="app__specialMenu_menu_items">
            {data.breakfast.map((breakfastItem, index) => (
              <div className='app__menu-items'>
                <MenuItem key={breakfastItem.title + index} title={breakfastItem.title} price={breakfastItem.price} desc={breakfastItem.desc} />
                <button type="button" className="custom__button app__menu-button">View Item</button>
              </div>
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <Image src='/menu.png' alt="menu__img" width={410} height={721} />
        </div>

        <div className="app__specialMenu-menu_lunch  flex__center">
          <p className="app__specialMenu-menu_heading">Lunch</p>
          <div className="app__specialMenu_menu_items">
            {data.lunch.map((cocktail, index) => (
              <div className='app__menu-items'>
                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} desc={cocktail.desc} />
                <button type="button" className="custom__button app__menu-button">View Item</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
