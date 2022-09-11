import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import data from '../ItemList/mockData';
import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {productId} = useParams();

    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            const detalle = data.find(items => items.id === productId);
            resolve(detalle);
        }, 2000);
    });

    useEffect(() => {
        getItems.then((result) => {
            setItems(result);
        })
    }, [productId]);

    return (
        <div className='detail'>
            <ItemDetail
                title={items.title}
                description={items.description}
                pictureUrl={items.pictureUrl}
                price={items.price}
                key={items.id}
            />
        </div>
    );
}

export default ItemDetailContainer;