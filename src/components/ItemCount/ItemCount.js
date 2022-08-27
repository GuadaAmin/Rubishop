import React from "react";
import './ItemCount.css';
import { useState } from "react";

const ItemCount = () => {
    const [ItemCount, setItemCount] = useState(1);
        const sumar = () => {
            setItemCount(ItemCount + 1);
        }
        const restar = () => {
            setItemCount(ItemCount - 1);
        }
    return (
        <div className="counterContainer">
            <h4>Cubo 3×3×3:</h4>
            <div className="counter">
                <div className="itemCountButton" onClick={restar}><h4>-</h4></div>
                <div className="itemCount">{ItemCount}</div>
                <div className="itemCountButton" onClick={sumar}><h4>+</h4></div>
            </div>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;