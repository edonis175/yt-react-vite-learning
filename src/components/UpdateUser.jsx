import { useContext, useState } from "react";

import { UserContext } from "../UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newUser.trim()) {
      updateUser(newUser);
      setNewUser("");
    }
  };
  return (
    <div>
      <h2>Update User name </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new Name"
        />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
