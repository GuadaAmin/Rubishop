import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {productCartList, removeItem, clearCart, getTotalPrice} = useContext(CartContext);

    return (
        <div>
            <h2 className='carritoElement'>Carrito:</h2>
            <div className='cart carritoElement'>
                {
                    productCartList.map((item) => {
                        return (
                            <div className='itemEnCarrito cartGrid'>    
                                <p className='cantidad'>{item.quantity}</p>
                                <img src={item.pictureUrl} height="50px" className='producto' alt={item.description} />
                                <p className='producto'>{item.title}</p>
                                <p className='precio'>${item.price}</p>
                                <div className='removerButton'>
                                    <button onClick={()=>removeItem(item.id)} className='remover'>Remover producto</button>
                                </div>
                            </div>
                        )
                    })
                }   
            </div>
            {
                productCartList.length > 0 ?
                <div className='total'>
                    <h3 className='carritoElement'>Total: ${getTotalPrice()}</h3>
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