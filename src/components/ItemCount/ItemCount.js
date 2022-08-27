import React from "react";
import './ItemCount.css';
import { useState } from "react";

const ItemCount = ({greeting}) => {
    const [ItemCount, setItemCount] = useState(1);
        const sumar = () => {
            setItemCount(ItemCount + 1);
        }
        const restar = () => {
            setItemCount(ItemCount - 1);
        }
    return (
        <div>
            <p>{greeting}</p>
            <div className="itemCountButton" onClick={restar}><h4>-</h4></div>
            <div>{ItemCount}</div>
            <div className="itemCountButton" onClick={sumar}><h4>+</h4></div>
        </div>
    );
}

export default ItemCount;