import React from "react";

const Inviting = ({ timeofDay }) => {
  return timeofDay === "morning" ? (
    <h1>Good Morning!</h1>
  ) : (
    <h1>Good Afternoon</h1>
  );
};

export default Inviting;
