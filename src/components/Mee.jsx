import React from "react";

const Mee = () => {
  return (
    <User
      img="./assets/me.jpg"
      name="Edonis"
      age={19}
      isMarried={false}
      hobbies={["Coding", "Sleeping"]}
    />
  );
};

const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Married: {isMarried ? "Yes" : "No"}</h1>
      <h1>Hobbies: {hobbies.join(", ")}</h1>
    </section>
  );
};

export default Mee;
