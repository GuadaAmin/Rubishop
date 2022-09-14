import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({title, pictureUrl, description, price}) => {
    const [contador, setContador] = useState("-");

    const onAdd = (cantidad)=>{
        setContador(cantidad)
    }


    return (
        <div className='itemDetail'>
            <h1>Detalle {title}</h1>
            <img src={pictureUrl} alt={description} height="300px" />
            <p>{description}</p>
            <p>{price}</p>
            <ItemCount nombreProducto="Producto" stock="10" initial="1" onAdd={onAdd} />
            <p>Cantidad: {contador}</p>
        </div>
    )
}

export default ItemDetail;