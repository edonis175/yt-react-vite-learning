import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

const Greeting = () => {
  const greet = "Hello";
  const date = new Date();
  return (
    <div>
      <RiTailwindCssFill />

      <FaReact />
    </div>
  );
};

export default Greeting;
