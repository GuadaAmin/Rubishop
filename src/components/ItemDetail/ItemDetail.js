import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({title, pictureUrl, description, price}) => {
    return (
        <div className='itemDetail'>
            <h1>Detalle {title}</h1>
            <img src={pictureUrl} alt={description} height="300px" />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default ItemDetail;