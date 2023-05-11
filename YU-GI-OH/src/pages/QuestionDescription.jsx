import React from "react";
import "../conponents/Form";

function QuestionDescription({ description, setDescription }) {
  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src="" alt="alt"></img>
        </div>

        <div className="textFormContainer"></div>
        <div className="inputContainer">
          <label htmlFor="description">
            How would your describe your monster?
          </label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default QuestionDescription;
