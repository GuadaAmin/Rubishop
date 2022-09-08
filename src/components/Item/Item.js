import React from "react";
import './Item.css';

const Item = ({title, pictureUrl, description, price}) => {
  return (
      <div className="item">
        <img src={pictureUrl} alt={description} height="250px"/>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </div>
  );
};

export default Item;
