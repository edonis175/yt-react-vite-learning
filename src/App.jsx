// const App = () => {
//   return <section>Hello World</section>;
// };

// export default App;

// function App() {
//   return <h1>Hello from function</h1>;
// }

// export default App;
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <WelcomeMessage />
      <JSXRules />
    </div>
  );
};

export default App;
