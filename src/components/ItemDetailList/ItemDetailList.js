import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";

const ItemDetailList = ({itemsList}) => {
    return (
        <div>
            {itemsList.map((item) => {
                return (
                    <ItemDetail 
                        title={item.title} 
                        description={item.description} 
                        pictureUrl={item.pictureUrl} 
                        price={item.price} 
                        key={item.id} 
                    />
                )
            })}
        </div>
    )
};

export default ItemDetailList;