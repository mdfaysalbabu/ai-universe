import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClear,children}) => {
    console.log(cart)
    const{price,quantity,shipping,id}=cart
    let priceTotal=0
    let shippingTotal=0
    let quantityTotal=0
    for(const product of cart){
         priceTotal=priceTotal+product.price*product.quantity;
         shippingTotal=shippingTotal+product.shipping
         quantityTotal=quantityTotal+product.quantity;
    }
    const tax=priceTotal*7/100
    const grandTotal=priceTotal+shippingTotal+tax
    return (
        <div className='cart'>
            <h4>Order Summary </h4>
            <p>Selected item:{quantityTotal}</p>
            <p>total price:{priceTotal}</p>
            <p>Total Shipping Charge:${shippingTotal.toFixed(2)}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h5>Grand Total:${grandTotal.toFixed(2)}</h5>
            <button onClick={handleClear} className='btn-clear'>
                <span>Clear cart</span>
                 <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                 {children}
        </div>
    );
};

export default Cart;