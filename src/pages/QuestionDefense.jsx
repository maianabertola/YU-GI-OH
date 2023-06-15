import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import robot from "../assets/yugioh robot.png";

function QuestionDefense() {
  const {
    defense: [defense, setDefense, handleDefense],
  } = useOutletContext();

  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src={robot} alt="robot yu gi oh" className="imgForm"></img>
        </div>

        <div className="questionFormContainer">
          <div className="inputContainer">
            <label htmlFor="defense">
              How many defense points do you want to assign to your monster?
            </label>
            <hr></hr>
            <input
              className="inputForm"
              type="number"
              id="defense"
              value={defense}
              onChange={(event) => setDefense(event.target.value)}
            />
            {defense !== "" ? (
              <Button onClick={handleDefense} cta={"Next question"}></Button>
            ) : (
              <div className="" style={{ textAlign: "right", width: 380 }}>
                Are you able to read this? If so, it indicates that you need to
                complete the form in order to move to the next step.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionDefense;
