import React, { useState } from "react";

function UserInput({ onSetUserName }) {
  let userName = "";

  const [stateUserName, setStateUserName] = useState(userName);

  const setUserName = (event) => {
    event.preventDefault();

    let userName = stateUserName;
    onSetUserName({ userName });
    setStateUserName("");
  };

  return (
    <div className="user-input">
      <form onSubmit={setUserName}>
        <div className="user-input-container">
          <h4>Enter username</h4>
          <div>
            <input
              onChange={(e) => setStateUserName(e.target.value)}
              value={stateUserName}
              type="text"
              className="user-input-form-input"
              autoFocus={true}
            />
          </div>

          <button>Show data</button>
        </div>
      </form>
    </div>
  );
}

export default UserInput;
