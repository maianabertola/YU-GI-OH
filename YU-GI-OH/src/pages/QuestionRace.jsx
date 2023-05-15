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
              <input className="inputForm"
                type="text"
                id="race"
                value={race}
                onChange={(event) => setRace(event.target.value)}
              />
              {race !== "" ? (
                <Button onClick={handleRace} cta={"Next"}></Button>
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

export default QuestionRace;
