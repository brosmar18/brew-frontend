import React from 'react';
import { FooterOverlay, NewsLetter } from '@/components';
import './Footer.scss';
import Image from 'next/image';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

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
                <div className="app__footer-links_logo">
                    <Image src='/logo.png' alt="footer_logo" width={150} height={20} />
                    <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                    <Image src='/spoon.png' className="spoon__img" style={{ marginTop: 15 }} width={45} height={10} />
                    <div className="app__footer-links_icons">
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                </div>
                <div className="app__footer-links_work">
                    <h1 className="app__footer-headtext">Working Hours</h1>
                    <p className="p__opensans">Tuesday - Sunday:</p>
                    <p className="p__opensans">08:00 am - 2:00 pm</p>
                    <p className="p__opensans">Monday:</p>
                    <p className="p__opensans">Closed</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;