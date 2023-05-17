import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import dragonRed from "../assets/dragon_red.jpeg";

function QuestionLevel() {
    const {
        level: [level, setLevel, handleLevel],
    } = useOutletContext();

  return (
    <>
        <div className="formContainer">
          <div className="imageContainer">
            <img src={dragonRed} alt="red dragon" className="imgForm" />
          </div>
          <div className="questionFormContainer">
            <div className="inputContainer">
              <label htmlFor="name">Choose its level</label>
              <hr></hr>
              <input
                className="inputForm"
                type="number"
                id="level"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
              />
              {level !== "" ? (
                <Button onClick={handleLevel} cta={"Next"}></Button>
              ) : (
                <div className="" style={{ textAlign: "right", width: 380 }}>
                  Are you able to read this? If so, it indicates that you need
                  to complete the form in order to move to the next step.
                </div>
              )}
            </div>
          </div>
        </div>
    </>
);
}

export default QuestionLevel;
