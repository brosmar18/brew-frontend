'use client';

import React, {useState} from 'react'
import Link from 'next/link';
import './NavBar.scss';
import {MdMenu, MdRestaurantMenu} from 'react-icons/md';
import {motion} from 'framer-motion';
import Image from 'next/image';



const NavBar = () => {
  return (
    <nav className='nav'>
        <div className='nav__logo'>
        <Image src="/logo.png" alt='logo' width={150} height={20} className='nav__logo-img' />
        </div>
        <ul className='nav__links'>
            {['home', 'menu', 'catering', 'about', 'contact'].map((item) => (
                <li key={item} className='p__opensans'>
                    <Link href={item === 'home' ? '/' : `/${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar;
