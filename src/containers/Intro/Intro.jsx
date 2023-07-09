'use client';

import React, {useState, useRef} from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.scss';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();
  return (
    <section className='app__video'>
        <video
        ref={vidRef}
        src='/brewhemia.mp4'
        type="video/mp4"
        loop
        controls={false}
      />
    </section>
  )
}

export default Intro;
