import React from "react";

function QuestionName({ name, setName, handleName }) {
  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src="" alt="alt"></img>
        </div>

        <div className="textFormContainer">
          {/* <h1 className="titleForm">Free your creative spirit</h1> */}
          <div className="inputContainer">
            <label htmlFor="name">What's the name of your monster?</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <button onClick={handleName}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionName;
