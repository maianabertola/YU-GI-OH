import React, { useState } from "react";
import "./Form.css";
import groupArtwork from "../assets/yu-gi-oh-group-i32848.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import QuestionName from "../pages/QuestionName";
import QuestionAttribute from "../pages/QuestionAttribute";
import QuestionAttack from "../pages/QuestionAttack";
import QuestionDefense from "../pages/QuestionDefense";
import QuestionDescription from "../pages/QuestionDescription";

function Form() {
  const [name, setName] = useState("");
  const [attribute, setAttribute] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [description, setDescription] = useState("");

  function handleName() {}

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("url", {
        name: name,
        attribute: attribute,
        attack: attack,
        defense: defense,
      });
      console.log("response", response);
    } catch (error) {
      console.log("BUG DATA:", error);
    }
  }

  return (
    <>
      <div className="formContainer">
        <div className="imageContainer">
          <img
            src={groupArtwork}
            alt="yumi and friends"
            className="imgForm"
          ></img>
        </div>

        <div className="textFormContainer">
          <h1 className="titleForm">Free your creative spirit</h1>
          <article>
            Create your custom Duel Monster in 2 minutes to take on any duel and
            face the toughest opponents.
          </article>
          <button>Create my card</button>
        </div>
      </div>
      <QuestionName name={name} setName={setName} handleName={handleName} />
      <QuestionAttribute attribute={attribute} setAttribute={setAttribute} />
      <QuestionAttack attack={attack} setAttack={setAttack} />
      <QuestionDefense defense={defense} setDefense={setDefense} />
      <QuestionDescription
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Form;
