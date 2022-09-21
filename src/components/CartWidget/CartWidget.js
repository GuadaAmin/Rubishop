import "./CartWidget.css";
import cart from './Images/cart.png';
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {getTotalProducts, productCartList} = useContext(CartContext);
    
    return (
        <div className="cart">
            <div className="cartBg">
                <img src={cart} width="25px" alt="Carrito" />
                {
                    productCartList.length > 0 ?
                    <p>{getTotalProducts()}</p>
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default CartWidget;