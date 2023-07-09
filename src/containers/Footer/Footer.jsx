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
                </div>
            </div>
        </div>
    )
}

export default Footer;