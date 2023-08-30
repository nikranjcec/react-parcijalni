import "./App.css";

import React, { useState, useEffect } from "react";
import UserInfo from "./components/UserInfo";
import UserInput from "./components/UserInput";
import UserRepos from "./components/UserRepos";

function App() {
  let username = "";

  const [stateUsername, setStateUsername] = useState(username);

  const onSetUserName = ({ userName }) => {
    const userFromInput = userName;
    setStateUsername(userFromInput);
  };

  const Reset = (e) => {
    const username = "";
    setStateUsername(username);
  };

  return (
    <div className="App">
      {stateUsername === "" ? (
        <UserInput onSetUserName={onSetUserName} />
      ) : (
        <div className="App-content">
          <div className="main-container">
            <div className="user-info-container">
              <UserInfo username={stateUsername} />
            </div>

            <div className="user-repos-container">
              <UserRepos username={stateUsername} />
            </div>
          </div>

          <button onClick={(e) => Reset(e)}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
