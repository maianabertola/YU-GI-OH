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

  console.log("ICI", name);
  return (
    <>
      <div>
        <div className="formContainer">
          <div className="imageContainer">
            <img
              src={astroSorcerer}
              alt="astro sorcerer"
              className="imgForm"
            ></img>
          </div>

          <div className="textFormContainer">
            <div className="inputContainer">
              <label htmlFor="name">What's the name of your monster?</label>
              <hr></hr>
              <input
                type="text"
                id="name"
                value={name}
                // onInput={onInput}
                onChange={(event) => setName(event.target.value)}
              />
              {name !== "" ? (
                <Button onClick={handleName} cta={"Next"}></Button>
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

export default QuestionName;
