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

        <div className="textFormContainer">
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
          {defense !== "" ? (
            <Button onClick={handleDefense} cta={"Last question"}></Button>
          ) : (
            <div className="">
              You can read this? Good. But please fullfil this form.
              P-L-E-A-S-E.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuestionDefense;
