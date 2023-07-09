import React from 'react'
import { SubHeader } from '@/components';
import './Header.scss';

const Header = () => {
    return (
        <header className='app__header app__wrapper section__padding'>
            <div className='app__wrapper_info'>
                <SubHeader title="Brewing Passion in Every Pour" />
                <h1 className='app__header-h1'>Your Kitchen Away From Home</h1>
                
            </div>
        </header>
    )
}

export default Header