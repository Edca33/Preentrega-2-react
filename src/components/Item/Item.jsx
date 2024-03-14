import React from 'react';
import './styles.css';

function Item({ name, category, stock, img, description, id , preorder }) {
  return (
    <div className="item" key={id}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{`stock: ${stock} `}</p>
      <p>{category}</p>
      {preorder &&  <p>{preorder} </p> }
      <p>{ preorder} </p>
    </div>
  );
}

export default Item;
