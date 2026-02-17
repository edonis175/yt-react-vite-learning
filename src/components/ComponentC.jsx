import { MyContext, MyContext1 } from "../App";
import { useContext } from "react";
const ComponentC = () => {
  const userName = useContext(MyContext);
  const age = useContext(MyContext1);

  return (
    <h1>
      Hello {userName} your age is {age}
    </h1>
  );
};

export default ComponentC;
