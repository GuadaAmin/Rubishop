import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../utils/firebase'

const ItemDetailContainer = () => {
    const {productId} = useParams();

    const [items, setItems] = useState();

    useEffect(() => {
        const getData = async() => {
            const query = doc(database, "items")
            const response = await getDoc(query)
            const data = {
                ...response.data(),
                id: response.id
            }
            setItems(data)
        }
        getData()
    }, [])

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            const detalle = items.find(items => items.id === productId);
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
            {!items ? (<h3 className='cargando'>Cargando...</h3>) : (
            <ItemDetail
                item={items}
                title={items.title}
                description={items.description}
                pictureUrl={items.pictureUrl}
                price={items.price}
                key={items.id}
            />
            )}            
        </div>
    );
}

export default ItemDetailContainer;