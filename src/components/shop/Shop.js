import React, { useEffect, useState } from 'react';
import Products from '../Product/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Product: {products.length}</h2>
                {
                    products.map(product => <Products product={product}
                    > </Products>)
                }
            </div>
            <div className="cart-container">
                <h2>Cart Information</h2>
                <h5>Items Order:</h5>
            </div>
        </div>
    );
};

export default Shop;