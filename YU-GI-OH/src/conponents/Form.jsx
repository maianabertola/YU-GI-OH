import React from "react";
import "./Form.css";
import groupArtwork from "../assets/yu-gi-oh-group-i32848.jpeg";

function Form() {
  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img src={groupArtwork} alt="yumi and friends"></img>
        </div>
        <div className="textFormContainer">
          <h1>Free your creative spirit</h1>
          <article>
            Create your custom Duel Monster in 2 minutes to take on any duel and
            face the toughest opponents.
          </article>
          <button>Create my card</button>
        </div>
      </div>
    </>
  );
}

export default Form;
