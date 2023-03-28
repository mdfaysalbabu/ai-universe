import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Peoduct from "../Product/Peoduct";
import "./Shop.css";

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
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
