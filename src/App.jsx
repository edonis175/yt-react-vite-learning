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
import Greeting from "./components/Greeting";
import Productinfo from "./components/productinfo";
import Users from "./components/Users";
import Mee from "./components/Mee";
import Person from "./components/Person";
import Product from "./components/Product";
import Loginlogic from "./components/Loginlogic";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Inviting from "./components/Inviting";
import Events from "./components/Events";
import UseStateHook from "./components/UseStateHook";
import SharedState from "./components/SharedState";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";

const App = () => {
  return (
    <div>
      <ExampleThree />
      <ExampleTwo />
      <ExampleOne />
      <Header />
      <SharedState />
      <Footer />
      <WelcomeMessage />
      <JSXRules />
      <Greeting />
      <Productinfo />
      <Users />
      <Mee />
      <Person name="Edonis" age={19} />
      <Product name="Iphone" price={650} />
      <Loginlogic />
      <Weather />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Inviting timeofDay="morning" />
      <Events />
      <UseStateHook />
    </div>
  );
};

export default App;
