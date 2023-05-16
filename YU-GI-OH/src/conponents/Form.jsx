import React, { useState } from "react";
import "./Form.css";
import groupArtwork from "../assets/yu-gi-oh-group-i32848.jpeg";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";

function Form() {
  const [name, setName] = useState("");
  const [attribute, setAttribute] = useState("");
  const [race, setRace] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [description, setDescription] = useState("");
  const [imageForm, setImageForm] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  console.log(imageForm);

  function changePage(event) {
    event.preventDefault();
    setShow(!show);
    navigate("name");
  }

  function handleName() {
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
    navigate("description");
  }

  function handleDescription() {
    navigate("image-monster");
  }

  async function handleSubmit(event) {
    console.log("toti");
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ironrest.fly.dev/api/yu-gi-oh",
        {
          name: name,
          attribute: attribute,
          atk: attack,
          def: defense,
          desc: description,
          picture: imageForm.image_url,
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
        attribute: [attribute, setAttribute, handleAttribute],
        race: [race, setRace, handleRace],
        attack: [attack, setAttack, handleAttack],
        defense: [defense, setDefense, handleDefense],
        description: [description, setDescription, handleDescription],
        image: [imageForm, setImageForm, handleSubmit],
      }}
    />
  );
}
export default Form;
