import React from 'react';
import Image from 'next/image';

function SubHeader({title}) {
    return (
        <div style={{marginBottom: '1rem'}}>
            <p className='p__cormorant'>{title}</p>
            <Image src='/spoon.png' alt='spoon' className='spoon__img' />
        </div>
    )
}

export default SubHeader;