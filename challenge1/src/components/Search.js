import React, { useEffect, useState } from "react";
import { userData } from "./Mockdata.js";

function Search() {
  // console.log(userData);
  const getUsersFromLS = (userData) => {
    const storedUsers = JSON.parse(localStorage.getItem("data"));
    return storedUsers ? storedUsers : userData;
  };

  const [users, setUsers] = useState(getUsersFromLS);
  //   first way to updateLikes
  //   const updateLikes = (index) => {
  //     const newUsers = [...users];
  //     newUsers[index] = { ...newUsers[index], likes: newUsers[index].likes + 1 };
  //     setUsers(newUsers);
  //   };

  // second way to updateLikes
  const updateLikes = (index) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === index ? { ...user, likes: user.likes + 1 } : user
      )
    );
  };
  const sortedUsers = users.sort(function (a, b) {
    return b.likes - a.likes;
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(users));
  }, [users]);
  return (
    <div>
      <label>Search</label>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      <div>
        {sortedUsers
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((user, index) => (
            <div key={index}>
              <span>{user.name}</span>
              <button onClick={() => updateLikes(user.id)}>{user.likes}</button>
            </div>
          ))}
      </div>{" "}
    </div>
  );
}

export default Search;
