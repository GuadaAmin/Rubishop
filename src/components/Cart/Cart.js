import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";

const Cart = () => {
    const {productCartList, removeItem, clearCart} = useContext(CartContext);

    return (
        <div>
            <h2 className='carritoElement'>Carrito:</h2>
            {
                productCartList.map((item) => {
                    return (
                        <div className='itemEnCarrito'>
                            <img src={item.pictureUrl} height="50px" className='carritoElement' />
                            <p className='carritoElement'>{item.quantity}</p>
                            <p className='carritoElement'>{item.title}</p>
                            <p className='carritoElement'>{item.quantityPrice}</p>
                            <button onClick={()=>removeItem(item.id)} className='carritoElement'>Remover producto</button>
                        </div>
                    )
                })
            }
            <button onClick={()=>clearCart()} className='carritoElement'>Vaciar carrito</button>
        </div>
    )
}

export default Cart;