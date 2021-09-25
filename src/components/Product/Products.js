import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log(props.product)
    const {name,img,price,stock,seller}= props.product;
    return (
        <div className="product">
           <div>
           <img src={img} alt="" />
           </div>

            <div className="pro-info">
            <h4>{name}</h4>
            <p><small>by-{seller}</small></p>
            <p><small>price-{price}</small></p>
            <p>only {stock} left in stock - order soon</p>
            </div>
        </div>
    );
};

export default Products;