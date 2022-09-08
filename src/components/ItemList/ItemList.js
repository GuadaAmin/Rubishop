import React from "react";
import Item from "../Item/Item.js";

const ItemList = ({itemsList}) => {
    
    return (
        <div>
            {itemsList.map((item) => {
                return (
                    <Item 
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

export default ItemList;