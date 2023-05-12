import React from "react";
import { useOutletContext } from "react-router-dom";
import astroSorcerer from "../assets/astro_sorcerer.jpeg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";

function QuestionName() {
  const {
    name: [name, setName, handleName],
  } = useOutletContext();

  const navigate = useNavigate();
  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src={astroSorcerer} alt="astro sorcerer"></img>
        </div>

        <div className="textFormContainer">
          <div className="inputContainer">
            <label htmlFor="name">What's the name of your monster?</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {/* <Link className="link" to="race">
              <Button onClick={handleName} cta={"Next"}></Button>
            </Link> */}

            <Button onClick={handleName} cta={"Next"}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionName;
