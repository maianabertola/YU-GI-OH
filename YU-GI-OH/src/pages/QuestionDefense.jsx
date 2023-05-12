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
          <img src={robot} alt="robot yu gi oh"></img>
        </div>

        <div className="textFormContainer"></div>
        <div className="inputContainer">
          <label htmlFor="defense">
            How many defense points do you want to assign to your monster?
          </label>
          <input
            type="number"
            id="defense"
            value={defense}
            onChange={(event) => setDefense(event.target.value)}
          />
        </div>
        <Button onClick={handleDefense} cta={"Last question"}></Button>
      </div>
    </>
  );
}

export default QuestionDefense;
