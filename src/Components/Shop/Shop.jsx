import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Peoduct from "../Product/Peoduct";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // set and get card local storage
  useEffect(() => {
    // step 1: get id
    const storeCard = getShoppingCart();
    const saveCart = [];
    for (const id in storeCard) {
      // step 2:get the product by using id
      const addproduct = products.find((product) => product.id === id);
      if (addproduct) {
        // step 3:get quantity of the product
        const quantity = storeCard[id];
        addproduct.quantity = quantity;
        // step 4: add product push the saveCart
        saveCart.push(addproduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleCart = (product) => {
    // set new cart
    let newCart = [];
    // cart push product
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart,then set quantity 1
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    // if exists update and add quantity by 1;
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  const handleClear = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Peoduct
            key={product.id}
            product={product}
            handleCart={handleCart}
          ></Peoduct>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClear={handleClear}>
          <Link className="purches-link" to="/orders">
            <button className="review-btn">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
