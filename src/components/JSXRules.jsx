import React from "react";

const JSXRules = () => {
  return (
    <div>
      <h1>JSX Rules</h1>

      <ul>JSX must return a single parent element</ul>
      <ul>JSX must be properly closed</ul>
      <ul>JSX can contain JavaScript expressions</ul>
      <ul>
        JSX uses camelCase for HTML attributes (e.g., ClassName instead of
        class)
      </ul>
      <ul>
        While using from an in Label we have to use htmlFor instead of for
      </ul>

      <p>These are some basic rules to follow when using JSX in React.</p>
    </div>
  );
};

export default JSXRules;
