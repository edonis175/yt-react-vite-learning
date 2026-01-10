import React from "react";

const Cart = () => {
  const items = ["Iphone", "Tablet", "Macbook", "Airpods", "Smartwatch"];
  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}

      <ol>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
        {/* {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
      </ol>
    </div>
  );
};

const Loginlogic = () => {
  return <Cart />;
};

export default Loginlogic;
