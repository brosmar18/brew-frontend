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
      </div>
    </section>
  )
}

export default Gallery
