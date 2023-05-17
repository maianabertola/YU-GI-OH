import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import dragonKnight from "../assets/dragon knight.jpeg";

function QuestionAttack() {
  const {
    attack: [attack, setAttack, handleAttack],
  } = useOutletContext();

  return (
    <>
      <div className="bigContainer">
        <div className="formContainer">
          <div className="imageContainer">
            <img
              src={dragonKnight}
              alt="dragon knight"
              className="imgForm"
            ></img>
          </div>

          <div className="questionFormContainer">
            <div className="inputContainer">
              <label htmlFor="attack">Define its attack power</label>
              <hr></hr>
              <input
                className="inputForm"
                type="number"
                id="attack"
                value={attack}
                onChange={(event) => setAttack(event.target.value)}
              />
              {attack !== "" ? (
                <Button onClick={handleAttack} cta={"Next"}></Button>
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

export default QuestionAttack;
