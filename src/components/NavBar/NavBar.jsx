'use client';

import React, {useState} from 'react'
import Link from 'next/link';
import './NavBar.scss';
import {MdMenu, MdRestaurantMenu} from 'react-icons/md';
import {motion} from 'framer-motion';
import Image from 'next/image';



const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='nav'>
        <div className='nav__logo'>
        <Image src="/logo.png" alt='logo' width={150} height={20} className='nav__logo-img' />
        </div>
        <ul className='nav__links'>
            {['Home', 'Menu', 'Catering', 'About', 'Contact'].map((item) => (
                <li key={item} className='p__opensans'>
                    <Link href={item === 'Home' ? '/' : `/${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
        <div className='nav__login'>
            <Link href={`#`} className='p__opensans nav__login-link'>Log In / Registration</Link>
            <div />
            <Link href={`#`} className='p__opensans nav__login-link'>Book Event</Link>
        </div>
        <div className="nav__mobile">
        <MdMenu fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
            <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.85, ease: 'easeOut'}}
            >
                <MdRestaurantMenu onClick={() => setToggleMenu(false)} />
                <ul>
                    {['Home', 'Menu', 'Catering', 'About', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link className='nav__mobile-link p__opensans' href={item === 'Home' ? '/' : `/${item}`} onClick={() => setToggleMenu(false)}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
      </div>
    </nav>
  )
}

export default NavBar;
