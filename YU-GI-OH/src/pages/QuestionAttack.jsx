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
      <div className="formContainer">
        <div className="imageContainer">
          <img src={dragonKnight} alt="dragon knight" className="imgForm"></img>
        </div>

        <div className="textFormContainer">
          <div className="inputContainer">
            <label htmlFor="attack">Define its attack power</label>
            <input 
              type="number"
              id="attack"
              value={attack}
              onChange={(event) => setAttack(event.target.value)}
            />
            {attack !== "" ? (
              <Button onClick={handleAttack} cta={"Next"}></Button>
            ) : (
              <div className="">
                You can read this? Good. But please fullfil this form.
                P-L-E-A-S-E.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionAttack;
