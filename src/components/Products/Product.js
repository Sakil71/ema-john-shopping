import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='common'>Seller: {seller}</p>
                <p className='common'>Ratings: {ratings}star</p>
            </div>
            <button onClick={()=>props.addToCart(props.product)} className='cart-button'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;