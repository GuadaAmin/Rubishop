import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../utils/firebase'

const Cart = () => {
    const {productCartList, removeItem, clearCart, getTotalPrice} = useContext(CartContext);
    const [ orderId, setOrderId ] = useState("");

    const sendOrder = (event) => {
        event.preventDefault();
        const order = {
            client: {
                name: event.target[1].value,
                surname: event.target[2].value,
                email: event.target[3].value,
                number: event.target[4].value,
            },
            items: productCartList,
            total: getTotalPrice(),
            date: new Date()
        }

        const queryRef = collection (database, "orders");
        addDoc(queryRef, order).then(response => {
            setOrderId(response.id);
        });
    }

    return (
        <div>
            {!orderId ?
                <div>
                    <h2 className='elementoCentrado'>Carrito:</h2>
                    <div className='cart carritoElement'>
                        {
                            productCartList.map((item) => {
                                return (
                                    <div className='itemEnCarrito cartGrid' key={item.id}>    
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
                            <div className='elementoCentrado'>
                                <h3 className='carritoElement'>Total: ${getTotalPrice()}</h3>
                                <button onClick={()=>clearCart()} className='carritoElement'>Vaciar carrito</button>
                            </div>
                            <div className='elementoCentrado'>
                                <form onSubmit={sendOrder}>
                                    <fieldset> 
                                        <legend><strong>Enviar pedido:</strong></legend>
                                        <div>
                                            <label for="nombre">Nombre:</label>
                                            <input type="text" name="name" />
                                        </div>
                                        <div>
                                            <label for="nombre">Apellido:</label>
                                            <input type="text" name="surname" />
                                        </div>
                                        <div>
                                            <label for="email">Email:</label>
                                            <input type="email" name="email" />
                                        </div>
                                        <div>
                                            <label for="numero">Número de telefono:</label>
                                            <input type="number" name="number" />
                                        </div>
                                        <input type="submit" value="Guardar orden" className="button" /> <input type="reset" value="Borrar" className="button" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        :
                        <div className='elementoCentrado'>
                            <p className='carritoElement'>El carrito está vacío</p>
                            <Link to='/' className='carritoElement'><button>Ver productos</button></Link>
                        </div>
                    }
                </div>
                :
                <h3 className='elementoCentrado'>Tu orden ha sido registrada!</h3>
            }
        </div>
    )
}

export default Cart;