import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("mounted");
  }, []);
  return <h1>Check the console</h1>;
};

export default BasicEffect;
