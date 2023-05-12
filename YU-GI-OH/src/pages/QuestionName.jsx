import React from "react";
import { useOutletContext } from "react-router-dom";

function QuestionName() {
  const {
    name: [name, setName, handleName],
  } = useOutletContext();
  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src="" alt="alt"></img>
        </div>

        <div className="textFormContainer">
          <div className="inputContainer">
            <label htmlFor="name">What's the name of your monster?</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <button onClick={handleName}>Hello</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionName;
