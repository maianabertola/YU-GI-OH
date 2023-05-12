import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";

function QuestionDescription() {
  const {
    description: [description, setDescription, handleSubmit],
  } = useOutletContext();

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
        <Button onClick={handleSubmit} cta={"Create monster"}></Button>
      </div>
    </>
  );
}

export default QuestionDescription;
