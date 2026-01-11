import React from "react";
const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return <button onClick={handleClick}>Click me</button>;
};

const Copy = () => {
  const copyHandler = () => {
    alert("You have copied some text!");
  };

  return (
    <p onCopy={copyHandler}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quibusdam
      enim doloremque natus laudantium, soluta repudiandae ea assumenda atque
      deserunt!
    </p>
  );
};

const Move = () => {
  function moveHandler() {
    alert("Mouse move event triggered!");
    console.log("Mouse move event triggered!");
  }
  return <p onMouseMove={moveHandler}>Move your mouse over this text!</p>;
};

const Events = () => {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  );
};

export default Events;
