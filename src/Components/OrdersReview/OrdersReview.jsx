import React from 'react';
import './OrderReview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'

const OrdersReview = ({product,handleDelete}) => {
    console.log(product)
    const{price,img,id,quantity,name}=product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
               <p className='title'>{name}</p>
               <p>price: <span className='orange-text'>{price}</span></p>
               <p>Quantity:<span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleDelete(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon></button>
        </div>
    );
};

export default OrdersReview;