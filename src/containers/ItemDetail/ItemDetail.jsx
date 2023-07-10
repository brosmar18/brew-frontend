import React from 'react';
import './ItemDetail.scss';
import Image from 'next/image';

const ItemDetail = ({ item }) => {
    if (!item) {
        return null;
    }

    return (
        <div className="item__modal app__bg">
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <p>{item.desc}</p>
            <Image src={item.imgUrl} alt={item.title} width={400} height={400} />
        </div>
    )
}

export default ItemDetail;
