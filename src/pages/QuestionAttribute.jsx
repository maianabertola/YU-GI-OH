import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import megaDragon from "../assets/megaDragon.png";

function QuestionAttribute() {
  const {
    attribute: [attribute, setAttribute, handleAttribute],
  } = useOutletContext();

  return (
    <>
      <div>
        <div className="formContainer">
          <div className="imageContainer">
            <img
              src={megaDragon}
              alt="big ass dragon"
              className="imgForm"
            ></img>
          </div>

          <div className="textFormContainer">
            <div className="inputContainer">
              <label htmlFor="name">What's its attribute?</label>
              <hr></hr>
              <input
                className="inputForm"
                type="text"
                id="attribute"
                value={attribute}
                onChange={(event) => setAttribute(event.target.value)}
              />
              {attribute !== "" ? (
                <Button onClick={handleAttribute} cta={"Next"}></Button>
              ) : (
                <div className="" style={{ textAlign: "right", width: 380 }}>
                  Are you able to read this? If so, it indicates that you need
                  to complete the form in order to move to the next step.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionAttribute;
