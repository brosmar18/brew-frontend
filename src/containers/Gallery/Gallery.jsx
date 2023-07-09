'use client';
import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeader } from '@/components';
import './Gallery.scss';


const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <section className='app__gallery flex__center'>
      <div className='app__gallery-content'>
      <SubHeader title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Step into our world through the lens of our Photo Gallery. From our artisan coffee and vibrant Mexican dishes to our cozy café ambiance and heartwarming community moments, each picture tells a piece of the Brewhemia story. Enjoy the visual journey!</p>
      </div>
    </section>
  )
}

export default Gallery
