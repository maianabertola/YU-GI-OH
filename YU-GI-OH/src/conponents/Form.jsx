import React, { useState } from "react";
import "./Form.css";
import groupArtwork from "../assets/yu-gi-oh-group-i32848.jpeg";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import { useEffect } from "react";

function Form() {
  const [name, setName] = useState("");
  const [attribute, setAttribute] = useState("");
  const [race, setRace] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  console.log("state debut", show);

  function changePage(event) {
    event.preventDefault();
    console.log("yes it changed");
    setShow(!show);
    navigate("name");
  }

  // useEffect(() => {
  //   const div = ref.current;
  //   const observer = new IntersectionObserver(entries => {
  //     const entry = entries[0];
  //     if (entry.isIntersecting) {
  //       document.body.style.backgroundColor = 'black';
  //       document.body.style.color = 'white';
  //     } else {
  //       document.body.style.backgroundColor = 'white';
  //       document.body.style.color = 'black';
  //     }
  //   });
  //   observer.observe(div, {
  //     threshold: 1.0
  //   });
  //   return () => {
  //     observer.disconnect();
  //   }
  // }, []);

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
  console.log("espion 1", show);

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

  console.log("espion 2", show);

  // name='desciption' onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}

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
              Create your custom Duel Monster in 2 minutes to take on any duel
              and face the toughest opponents.
            </article>
            <Link className="link">
              <Button cta={"Start"} onClick={changePage(event)}></Button>
            </Link>
          </div>
        </div>
        <Outlet
          context={{
            name: [name, setName, handleName],
            attribute: [attribute, setAttribute, handleAttribute],
            race: [race, setRace, handleRace],
            attack: [attack, setAttack, handleAttack],
            defense: [defense, setDefense, handleDefense],
            description: [description, setDescription, handleSubmit],
          }}
        />
      </>
    );
  }
}
// console.log("espion 3", show);

// console.log("state apres changement", show);

export default Form;
