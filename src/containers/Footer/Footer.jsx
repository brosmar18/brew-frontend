import React from 'react';
import { FooterOverlay, NewsLetter } from '@/components';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='app__footer section__padding'>
            <FooterOverlay />
            <NewsLetter />
        </div>
    )
}

export default Footer;