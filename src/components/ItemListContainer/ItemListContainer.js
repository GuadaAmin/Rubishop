import React from "react";
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemListContainer">
            <p>{greeting}</p>
            <ItemCount nombreProducto="Cubo 3×3×3" />
            <ItemList />
        </div>
    );
}

export default ItemListContainer;