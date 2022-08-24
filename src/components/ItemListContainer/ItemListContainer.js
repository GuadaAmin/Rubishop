import React from "react";
import './ItemListContainer.css';

const ItemListContainer = ({texto}) => {
    return (
        <div className="itemListContainer">
            <p>{texto}</p>
        </div>
    );
}

export default ItemListContainer;