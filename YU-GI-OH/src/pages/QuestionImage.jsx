import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../conponents/Button";
import "../conponents/Form.css";
import kaiba from "../assets/kaiba.png";

function QuestionImage() {
  const {
    image: [imageForm, setImageForm, handleSubmit],
  } = useOutletContext();

  function handleChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      setImageForm(reader.result);
    };
  }

  return (
    <>
      <div>
        <div className="formContainer">
          <div className="imageContainer">
            <img src={kaiba} alt="kaiba yugioh" className="imgForm"></img>
          </div>

          <div className="textFormContainer">
            <div className="inputContainer">
              <label htmlFor="imageForm">
                The last question, what will your monster look like?
              </label>
              <hr></hr>
              {/* <img src={imageForm} width={100} alt="" /> */}
              <input
                className="inputForm"
                type="file"
                id="imageForm"
                accept="image/png"
                // value={imageForm}
                onChange={handleChange}
              />
              {imageForm !== "" ? (
                <Button
                  onClick={handleSubmit}
                  cta={"Create your monster"}
                ></Button>
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

export default QuestionImage;
