import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrdersReview from '../OrdersReview/OrdersReview';
import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const saveCart=useLoaderData();
    const[cart,SetCart]=useState(saveCart)

    const handleDelete=(id)=>{
       const remaining=cart.filter(pd=>pd.id!==id)
       SetCart(remaining)
       removeFromDb(id)
    }

    const handleClear=()=>{
        SetCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                <h2>this is order:{cart.length}</h2>
                {
                    cart.map(product=><OrdersReview product={product} key={product.id} handleDelete={handleDelete}></OrdersReview>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClear={handleClear}>
                    <Link className='purches-link' to='/checkout'>
                        <button className='review-btn'>Purches</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;