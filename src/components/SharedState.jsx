import { use, useState } from "react";
import ComponentTwo from "./Component/ComponentTwo";
import ComponentOne from "./Component/Componentone";

const SharedState = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </section>
  );
};

export default SharedState;
