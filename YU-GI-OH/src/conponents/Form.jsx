import React from "react";
import "./Form.css";
import groupArtwork from "../assets/yu-gi-oh-group-i32848.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import Question from "./Question";

function Form() {
  const [name, setName] = useState("");
  const [attribute, setAttribute] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [description, setDescription] = useState("");

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
          <img src={groupArtwork} alt="yumi and friends"></img>
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
      <Question name={name} setName={setName} />
      <Question attribute={attribute} setAttribute={setAttribute} />
      <Question attack={attack} setAttack={setAttack} />
      <Question defense={defense} setDefense={setDefense} />
      <Question
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Form;
