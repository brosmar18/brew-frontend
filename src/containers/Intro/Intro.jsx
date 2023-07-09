'use client';

import React, {useState, useRef} from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.scss';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();
  return (
    <div>
      <h1>Intro</h1>
    </div>
  )
}

export default Intro;
