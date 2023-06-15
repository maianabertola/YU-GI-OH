import React, { useState } from "react";
import "./Form.css";
import groupArtwork from "../assets/yu-gi-oh-group-i32848.jpeg";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";

function Form() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(0);
  const [attribute, setAttribute] = useState("");
  const [race, setRace] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [type, setType] = useState("")
  const [description, setDescription] = useState("");
  const [imageForm, setImageForm] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  function changePage(event) {
    event.preventDefault();
    setShow(!show);
    navigate("name");
  }

  function handleName() {
    navigate("level");
  }

  function handleLevel() {
    navigate("race");
  }

  function handleRace() {
    navigate("attribute");
  }

  function handleAttribute() {
    navigate("attack");
  }

  function handleAttack() {
    navigate("defense");
  }

  function handleDefense() {
    navigate("type");
  }

  function handleType() {
    navigate("description")
  }

  function handleDescription() {
    navigate("image-monster");
  }

  async function handleSubmit(event) {
    // console.log("toti");
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ironrest.fly.dev/api/yu-gi-oh",
        {
          name: name,
          level: level,
          attribute: attribute,
          race: race,
          atk: attack,
          def: defense,
          type: type,
          desc: description,
          card_images: [{image_url: imageForm}],
        }
      );
      console.log("response", response);
      navigate("your-monster-is-created");
    } catch (error) {
      console.log("BUG DATA:", error);
    }
  }
  if (show) {
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
              Create your custom Duel Monster to take on any duel and face the
              toughest opponents.
            </article>
            <Button cta={"Start"} onClick={changePage}></Button>
          </div>
        </div>
      </>
    );
  }
  return (
    <Outlet
      context={{
        name: [name, setName, handleName],
        level: [level, setLevel, handleLevel],
        attribute: [attribute, setAttribute, handleAttribute],
        race: [race, setRace, handleRace],
        attack: [attack, setAttack, handleAttack],
        defense: [defense, setDefense, handleDefense],
        type: [type, setType, handleType],
        description: [description, setDescription, handleDescription],
        image: [imageForm, setImageForm, handleSubmit],
      }}
    />
  );
}
export default Form;
