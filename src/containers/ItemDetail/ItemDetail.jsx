import React from 'react';
import './ItemDetail.scss';
import Image from 'next/image';

const ItemDetail = ({ item }) => {
    if (!item) {
        return null;
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <p>{item.desc}</p>
            <Image src='/default-item-image.png' alt={item.title} width={100} height={100} />
        </div>
    )
}

export default ItemDetail;
