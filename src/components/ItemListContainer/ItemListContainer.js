import React from "react";
import './ItemListContainer.css';
import data from "../ItemList/mockData";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {categoria} = useParams();
    console.log(categoria)

    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getItems.then((result) => {
            if (categoria) {
                const newCategoria = result.filter(items => items.categoria === categoria)
                setItems(newCategoria)
            } else {
                setItems(result);
            }
        })
    }, [categoria]);

    return (
        <div className="itemListContainer">
            <ItemList itemsList={items}/>
        </div>
    );
}

export default ItemListContainer;