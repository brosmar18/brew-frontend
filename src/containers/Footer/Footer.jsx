import React from 'react';
import { FooterOverlay, NewsLetter } from '@/components';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='app__footer section__padding'>
            <FooterOverlay />
            <NewsLetter />

            <div className='app__footer-links'>
                <div className='app__footer-links_contact'>
                    <h1 className='app__footer-headtext'>Contact Us</h1>
                    <p className="p__opensans">1202 3rd St SE #101, Cedar Rapids, IA 52401</p>
                    <p className="p__opensans">(319) 364-0802</p>
                    <p className="p__opensans">andrea@brewhemia.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;