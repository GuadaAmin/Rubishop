import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState ([])

    const addItem = (items, quantity) => {
        const newProduct = {
            ...items,
            quantity
        }
        const productsInCart = [...productCartList];
        productsInCart.push(newProduct);
        setProductCartList(productsInCart);
    }

    const removeItem = (itemId) => {
        const productsInCart = productCartList.filter(items => items.id !== itemId) 
        setProductCartList(productsInCart);
    }

    return (
        <CartContext.Provider value={{productCartList, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
