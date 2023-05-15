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
              <input className="inputForm"
                type="text"
                id="attribute"
                value={attribute}
                onChange={(event) => setAttribute(event.target.value)}
              />
              {attribute !== "" ? (
                <Button onClick={handleAttribute} cta={"Next"}></Button>
              ) : (
                <div className="">
                  You can read this? Good. But please fullfil this form.
                  P-L-E-A-S-E.
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
