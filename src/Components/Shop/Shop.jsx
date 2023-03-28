import React, { useEffect, useState } from 'react';
import Peoduct from '../Product/Peoduct';
import "./Shop.css"

const Shop = () => {
    const[products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
  }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Peoduct
                    key={product.id} product={product} handleCart={handleCart}></Peoduct>)
                }
            </div>
            <div className="cart-container">
               <p>Selected item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;