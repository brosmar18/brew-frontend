'use client';
import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeader } from '@/components';
import './Gallery.scss';
import {images} from '@/constants/images.jsx';
import Image from 'next/image';


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
      <button type="button" className="custom__button">Explore Menu</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container'
          ref={scrollRef}>
            {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <Image src={image} alt='gallery' width={301} height={447} />
                <BsInstagram className='gallery__image-icon' />
              </div>
            ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </section>
  )
}

export default Gallery
