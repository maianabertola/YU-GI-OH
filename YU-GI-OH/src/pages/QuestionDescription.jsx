import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import yugiMagicien from "../assets/HD-wallpaper-yugioh-anime.jpeg";

function QuestionDescription() {
  const {
    description: [description, setDescription, handleSubmit],
  } = useOutletContext();

  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img
            src={yugiMagicien}
            alt="Yugi and his best friend"
            className="imgForm"
          ></img>
        </div>

        <div className="textFormContainer">
          <div className="inputContainer">
            <label htmlFor="description">
              How would your describe your monster?
            </label>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          {description !== "" ? (
            <Button onClick={handleSubmit} cta={"Create monster"}></Button>
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

export default QuestionDescription;
