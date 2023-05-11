import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import magicien from "../assets/udon_ygo_card_art_book_header.jpeg";
import axios from "axios";

function Question() {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="imageContainer">
            <img src={magicien} alt="alt"></img>
          </div>

          <div className="textFormContainer">
            {/* <h1 className="titleForm">Free your creative spirit</h1> */}
            <div className="inputContainer">
              <label htmlFor="name">What's the name of your monster?</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="attribute">
                What's the attribute of your monster?
              </label>
              <input
                type="text"
                id="attribute"
                value={attribute}
                onChange={(event) => setAttribute(event.target.value)}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="attack">What's its power of attack?</label>
              <input
                type="number"
                id="attack"
                value={attack}
                onChange={(event) => setAttack(event.target.value)}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="attack">What's its level of defense?</label>
              <input
                type="number"
                id="defense"
                value={defense}
                onChange={(event) => setDefense(event.target.value)}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="description">
                How would your describe your monster?
              </label>
              <textarea
                type="text"
                id="description"
                value={defense}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            {/* <Link to="Question2"> */}
            <button>Create my card</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Question;
