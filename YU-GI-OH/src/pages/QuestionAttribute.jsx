import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";

function QuestionAttribute() {
  const {
    attribute: [attribute, setAttribute, handleAttribute],
  } = useOutletContext();

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
        <Button onClick={handleAttribute} cta={"Next question"}></Button>
      </div>
    </>
  );
}

export default QuestionAttribute;
