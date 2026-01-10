import React from "react";

const Users = () => {
  const userinfo = [
    { id: 1, name: "ALice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <div>
      {userinfo.map((user) => (
        <div key={user.id}>
          <h1>Name:{user.name}</h1>
          <h1>Age:{user.age}</h1>
        </div>
      ))}
    </div>
  );
};

export default Users;
