import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import dragonRed from "../assets/dragon_red.jpeg";

function QuestionRace() {
  const {
    race: [race, setRace, handleRace],
  } = useOutletContext();

  return (
    <>
      <div className="bigContainer">
        <div className="formContainer">
          <div className="imageContainer">
            <img src={dragonRed} alt="red dragon" className="imgForm"></img>
          </div>

          <div className="textFormContainer">
            <div className="inputContainer">
              <label htmlFor="name">Choose its race</label>
              <hr></hr>
              <input
                className="inputForm"
                type="text"
                id="race"
                value={race}
                onChange={(event) => setRace(event.target.value)}
              />
              {race !== "" ? (
                <Button onClick={handleRace} cta={"Next"}></Button>
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

export default QuestionRace;
