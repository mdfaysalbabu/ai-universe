import React from 'react';
import "./Product.css"

const Peoduct = (props) => {
    const{name,seller,price,stock,ratings,img}=props.product
    const handleCart=props.handleCart
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>price:{price}</p>
            <p>manufecture:{seller}</p>
            <p>ratings:{ratings}star</p>
            </div>
            <button onClick={()=>handleCart(props.product)} className='btn'>Add to cart</button>
        </div>
    );
};

export default Peoduct;