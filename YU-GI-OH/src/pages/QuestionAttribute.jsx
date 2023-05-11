import React from "react";

function QuestionAttribute() {
  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src="" alt="alt"></img>
        </div>
      </div>

      <div className="inputContainer">
        <label htmlFor="attribute">What's the attribute of your monster?</label>
        <input
          type="text"
          id="attribute"
          value={attribute}
          onChange={(event) => setAttribute(event.target.value)}
        />
      </div>
    </>
  );
}

export default QuestionAttribute;
