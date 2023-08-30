import React, { useState, useEffect } from "react";

function UserRepos({ username }) {
  const [userRepos, setUserRepos] = useState(null);

  const getUserRepos = () => {
    fetch("https://api.github.com/users/" + username + "/repos")
      .then((res) => res.json())
      .then((data) => {
        console.log("", data);
        setUserRepos(data);
      });
  };

  useEffect(() => {
    getUserRepos(username);
  }, []);

  return (
    <div>
      <h2>User Repos</h2>
      {userRepos && (
        <ul className="user-repos-list">
          {userRepos.map((repo) => (
            <li className="repo" key={repo.id}>
              {repo.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserRepos;
