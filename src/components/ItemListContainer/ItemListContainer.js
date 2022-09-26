import React from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from '../../utils/firebase'

const ItemListContainer = () => {
    const {categoria} = useParams();

    const [items, setItems] = useState();

    useEffect(() => {
        const getData = async() => {
            const queryRef = query(collection(database, "items"), where("categoria", "==", categoria))
            const response = await getDocs(queryRef)
            const data = response.docs.map ( doc => {
                const items = {
                    ...doc.data(),
                    id: doc.id
                }
                setItems(items);
            })
        }
        getData()
    }, [])

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items);
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
            {!items ? (<h3>Cargando...</h3>) : (<ItemList itemsList={items}/>)}
        </div>
    );
}

export default ItemListContainer;