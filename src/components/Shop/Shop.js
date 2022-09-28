import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([]);

    const addToCart= (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <section className='shop-container'>
            <div className='shop'>
                {
                    products.map(product => <Product
                        product={product}
                        key = {product.id}
                        addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className='review-container'>
                <p className='order'>Order review</p>
                <p>Selected Items: {cart.length}</p>
            </div>
        </section>
    );
};

export default Shop;