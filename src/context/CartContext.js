import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState ([])

    const isInCart = (idProducto) => {
        const duplicatedProduct =   productCartList.some((item) => item.id === idProducto);
        return duplicatedProduct;
    }

    const addItem = (items, quantity) => {
        const newProduct = {
            ...items,
            quantity,
        }

        if(isInCart(items.id)) {
            const product = productCartList.findIndex(
                (producto) => producto.id === items.id
            );
            const newArray = [...productCartList];
            newArray[product].quantity = newArray[product].quantity + quantity;
            newArray[product].quantityPrice = newArray[product].quantity * newArray[product].precio;
            setProductCartList(newArray);
        } else {
            const newList = [...productCartList];
            newProduct.quantityPrice = newProduct.quantity * newProduct.precio;
            newList.push(newProduct);
            setProductCartList(newList);

        }
    }

    const clearCart = () => {
        setProductCartList([])
    }

    const removeItem = (itemId) => {
        const productsInCart = productCartList.filter(items => items.id !== itemId) 
        setProductCartList(productsInCart);
    }

    const getPrecioTotal = () => {
        const precioTotal = productCartList.reduce(
            (acumulador, item) => acumulador + item.quantityPrice,
            0
        );
        return precioTotal;
    };

    const getTotalQuantity = () => {
        const total = productCartList.reduce(
            (acumulador, item) => acumulador + item.quantity,
            0
        );
        return total;
    }

    return (
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearCart, getPrecioTotal, getTotalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
