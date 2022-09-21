import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';

const ItemDetail = ({item, title, pictureUrl, description, price}) => {
    const {addItem} = useContext(CartContext);

    const [contador, setContador] = useState("-");

    const onAdd = (quantity)=>{
        setContador(quantity)
        addItem(item, quantity)
    }


    return (
        <div className='itemDetail'>
            <h1>Detalle {title}</h1>
            <img src={pictureUrl} alt={description} height="300px" />
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount nombreProducto="Producto" stock={item.stock} initial={1} onAdd={onAdd} />
            <p>Cantidad: {contador}</p>
        </div>
    )
}

export default ItemDetail;