import React from "react";
import card from "../assets/card template.jpeg";
import "./CardDetails.css";

function CardDetails() {
  return (
    <div className="cardDetailsContainer">
      <div className="imgContainer">
        <div className="cardShgitadow">
          <img src={card} />
        </div>
      </div>

      <div className="infoContainer">
        <div className="titleCard">
          <h1>Name of the card</h1>
          <hr></hr>
        </div>
        <div className="row">
          <div className="item">Attribute: Wind</div>
          <div className="item">Race: Nain de jardin</div>
        </div>

        <div className="row">
          <div className="item">Attack: 1200</div>
          <div className="item">Defense: 1400</div>
        </div>

        <div className="row item">
          <article>
            2 Level 4 monsters\nOnce per turn Quick Effect: You can detach 1
            material from this card, then target 1 Spell/Trap on the field;
            destroy it
          </article>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
