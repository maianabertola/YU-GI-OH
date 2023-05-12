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
      <div className="formContainer">
        <div className="imageContainer">
          <img src={dragonRed} alt="alt"></img>
        </div>

        <div className="textFormContainer"></div>
        <div className="inputContainer">
          <label htmlFor="race">Choose its race</label>
          <input
            type="number"
            id="race"
            value={race}
            onChange={(event) => setRace(event.target.value)}
          />
          <Button onClick={handleRace} cta={"Next"}></Button>
        </div>
      </div>
    </>
  );
}

export default QuestionRace;
