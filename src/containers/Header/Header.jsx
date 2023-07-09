import React from 'react'
import { SubHeader } from '@/components';
import './Header.scss';
import Image from 'next/image';

const Header = () => {
    return (
        <header className='app__header app__wrapper section__padding'>
            <div className='app__wrapper_info'>
                <SubHeader title="Brewing Passion in Every Pour" />
                <h1 className='app__header-h1'>Your Kitchen Away From Home</h1>
                <p className='p__opensans' style={{ margin: '2rem 0' }}>At Brewhemia, we blend the warmth of Mexican cuisine with the art of coffee. Savor our award-winning breakfast burritos with a cup of our finest brew.</p>
                <button type='button' className='custom__button'>Explore Menu</button>
            </div>
            <div className='app__wrapper_img'>
                <Image className='app__wrapper_img-item' src="/welcome.png" alt='Latte and croissant on a table'  width={547} height={547} />
            </div>
        </header>
    )
}

export default Header