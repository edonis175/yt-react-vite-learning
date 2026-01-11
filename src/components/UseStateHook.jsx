import { use, useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const Friends = () => {
    const [friends, setFriends] = useState(["Alice", "Bob", "Charlie"]);
    const addOneFriend = () => setFriends([...friends, "Edonis"]);
    const removeOneFriend = () =>
      setFriends(friends.filter((f) => f !== "Bob"));
    const updateOnefriend = () => {
      setFriends(friends.map((f) => (f === "Alice" ? "Amelia" : f)));
    };
    return (
      <section>
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}

        <button onClick={addOneFriend}>Add new friend</button>
        <button onClick={removeOneFriend}>Remove one friend</button>
        <button onClick={updateOnefriend}>Update one Friend</button>
      </section>
    );
  };

  const Movie = () => {
    const [movie, setMovie] = useState({
      title: "Bee",
      ratings: 4.5,
    });

    const handleClicked = () => setMovie({ ...movie, ratings: 5 });

    return (
      <div>
        <h1>Title:{movie.title}</h1>
        <p>Rating:{movie.ratings}</p>
        <button onClick={handleClicked}>Change Rating</button>
      </div>
    );
  };

  const Testmovie = () => {
    const [mowies, setMowies] = useState([
      { id: 1, title: "Spiderman", ratings: 4 },
      { id: 2, title: "Superman", ratings: 6 },
    ]);

    const handleClick = () => {
      setMowies(
        mowies.map((m) => (m.id === 1 ? { ...mowies, title: "Batman" } : m))
      );
    };

    return (
      <section>
        {mowies.map((m) => (
          <li key={Math.random()}>{m.title}</li>
        ))}

        <button onClick={handleClick}>Change name</button>
      </section>
    );
  };

  return (
    <section>
      <Testmovie />
      <Friends />
      <Movie />
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  );
};

export default UseStateHook;
