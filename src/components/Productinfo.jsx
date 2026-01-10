import React from "react";

const productinfo = () => {
  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$699",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$999",
    },
    {
      id: 3,
      name: "Tablet",
      price: "$499",
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.name}>
          <h1>Name: {p.name}</h1>
          <h1>Price: {p.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default productinfo;
