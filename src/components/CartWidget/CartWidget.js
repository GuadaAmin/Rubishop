import "./CartWidget.css";
import cart from './Images/cart.png';
import React from "react";

const CartWidget = () => {
    return (
        <div className="cart">
            <div className="cartBg">
                <img src={cart} width="25px" alt="Carrito" />
            </div>
        </div>
    )
}

export default CartWidget;