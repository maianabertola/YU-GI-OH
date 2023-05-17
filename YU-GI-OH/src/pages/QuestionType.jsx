import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import dragonRed from "../assets/dragon_red.jpeg";

function QuestionType() {
  const { type: [type, setType, handleType] } = useOutletContext();

  return (
    <>
      <div className="bigContainer">
        <div className="formContainer">
          <div className="imageContainer">
            <img src={dragonRed} alt="red dragon" className="imgForm" />
          </div>
          <div className="textFormContainer">
            <div className="inputContainer">
                <form>
                <label htmlFor="description">Choose its type</label>
                  <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Normal Monster" >Normal Monster</option>
                    <option value="Flip Effect Monster">Flip Effect Monster</option>
                    <option value="Effect Monster">Effect Monster</option>
                    <option value="Union Effect Monster">Union Effect Monster</option>
                  </select>
                  <Button onClick={handleType} cta={"Next"} />
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionType