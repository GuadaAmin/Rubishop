import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: "1",
                title: "Cubo 3×3×3 Qiyi",
                description: "Cubo original marca Qiyi",
                price: "$3000",
                pictureUrl:
                    "https://http2.mlstatic.com/D_NQ_NP_730276-MLA40147249639_122019-O.webp",
            });
        }, 2000);
    });

    useEffect(() => {
        getItems.then((result) => {
            setItems(result);
        })
    }, []);

    return (
        <div>
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