import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './DescriptionCard.css'

function DescriptionCard() {
  const [card, setCard] = useState("");
  const param = useParams();
  const collectionCard = "https://ironrest.fly.dev/api/yu-gi-oh";

  async function fetchCard() {
    try {
      const response = await axios.get(`${collectionCard}/${param.id}`);
      setCard(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchCard();
  }, []);

  if (!card) {
      return <div>wait</div>;
    }
    
    console.log(card);
    // if({card.type} === "Effect Monster")
  return (
    <div key={param.id} className="cardDes">
        <div>
          <img src={card.card_images[0].image_url}></img>
        </div>
        <div className="detailCard">
            <div className="block">
              <h1>{card.name}</h1>
            </div>
            <div className="block">
              <p>{card.race}</p>
              <p>attribute: {card.attribute}</p>
              <p>level {card.level}</p>
            </div>
            <div className="block">
              <p>type: {card.type}</p>
            </div>
            <div className="block">
              <p>ATK / {card.atk}</p>
              <p>DEF / {card.def}</p>
            </div>
            <div className="block desc">
              <p>{card.desc}</p>
            </div>
            <div className="id">
              <p>Id: {card.oldId}</p>
            </div>
        </div>
    </div>
  );
}

export default DescriptionCard;
