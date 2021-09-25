import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log(props.product)
    const {name,img,price,stock}= props.product;
    return (
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Products;