// ItemDetail.jsx

import React from 'react';
import './ItemDetail.scss';
import Image from 'next/image';
import { IoMdArrowBack, IoMdArrowForward, IoMdClose } from 'react-icons/io';

const ItemDetail = ({ item, closeModal, goBack, goForward, showBackArrow, showForwardArrow }) => {
    if (!item) {
        return null;
    }

    return (
        <div className="item__modal app__bg">
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <p>{item.desc}</p>
            <Image src={item.imgUrl} alt={item.title} width={400} height={400} />
            <div className='nav__buttons'>
                {showBackArrow && (
                    <button className="back-button" onClick={goBack}>
                        <IoMdArrowBack size={24} />
                    </button>
                )}
                <button className='close-button' onClick={closeModal}>
                    <IoMdClose size={24} />
                </button>
                {showForwardArrow && (
                    <button className="forward-button" onClick={goForward}>
                        <IoMdArrowForward size={24} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default ItemDetail;
