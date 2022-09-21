import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {productCartList, removeItem, clearCart, getPrecioTotal} = useContext(CartContext);

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
                            <p className='carritoElement'>${item.price}</p>
                            <button onClick={()=>removeItem(item.id)} className='carritoElement'>Remover producto</button>
                        </div>
                    )
                })
            }   
            {
                productCartList.length > 0 ?
                <div className='total'>
                    <h3 className='carritoElement'>Total: ${getPrecioTotal()}</h3>
                    <button onClick={()=>clearCart()} className='carritoElement'>Vaciar carrito</button>
                </div>
                :
                <div>
                    <p className='carritoElement'>El carrito está vacío</p>
                    <Link to='/' className='carritoElement'><button>Ver productos</button></Link>
                </div>
            }
        </div>
    )
}

export default Cart;