import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import yugiMagicien from "../assets/HD-wallpaper-yugioh-anime.jpeg";

function QuestionDescription() {
  const {
    description: [description, setDescription, handleDescription],
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

        <div className="questionFormContainer">
          <div className="inputContainer">
            <label htmlFor="description">
              How would your describe your monster?
            </label>
            <hr></hr>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

            {description !== "" ? (
              <Button
                onClick={handleDescription}
                cta={"Next question"}
              ></Button>
            ) : (
              <div className="" style={{ textAlign: "right", width: 380 }}>
                Are you able to read this? If so, it indicates that you need to
                complete the form in order to move to the next step.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionDescription;
