import React from 'react';
import './ItemDetail.scss';
import Image from 'next/image';
import {IoMdArrowBack} from 'react-icons/io';

const ItemDetail = ({ item, closeModal }) => {
    if (!item) {
        return null;
    }

    return (
        <div className="item__modal app__bg">
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <p>{item.desc}</p>
            <Image src={item.imgUrl} alt={item.title} width={400} height={400} />
            <button className="back-button" onClick={closeModal}>
                <IoMdArrowBack size={24} />
            </button>
        </div>
    )
}

export default ItemDetail;
