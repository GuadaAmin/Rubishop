import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const {productCartList, removeItem} = useContext(CartContext);

    return (
        <div>
            <h2>Carrito:</h2>
            {
                productCartList.map((items) => {
                    return (
                        <>
                            <p>{items.title}</p>
                            <p>{items.quantity}</p>
                            <button onClick={()=>removeItem(items.id)}>Remover producto</button>
                        </> 
                    )
                })
            }
        </div>
    )
}

export default Cart;