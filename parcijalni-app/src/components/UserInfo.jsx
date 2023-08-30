import React, { useState, useEffect } from "react";

function UserInfo({ username }) {
  const [userData, setUserData] = useState(null);

  const getUserInfo = () => {
    fetch("https://api.github.com/users/" + username)
      .then((res) => res.json())
      .then((data) => {
        console.log("", data);
        setUserData(data);
      });
  };

  useEffect(() => {
    getUserInfo(username);
  }, []);

  return (
    <div>
      <h2>UserInfo</h2>
      {userData && (
        <>
          <h3>{userData.name}</h3>
          <p>{userData.location}</p>
          <p>{userData.bio}</p>
          <img
            className="avatar-image"
            src={userData.avatar_url}
            alt="user avatar photo"
          />
        </>
      )}
    </div>
  );
}

export default UserInfo;
