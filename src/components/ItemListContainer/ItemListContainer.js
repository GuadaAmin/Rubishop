import React from "react";
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";
import data from "../ItemList/mockData";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getItems.then((result) => {
            setItems(result);
        })
    }, []);

    return (
        <div className="itemListContainer">
            <ItemCount nombreProducto="Cubo 3×3×3" stock="10" initial="1" />
            <ItemList itemsList={items}/>
        </div>
    );
}

export default ItemListContainer;