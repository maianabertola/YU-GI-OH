import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DescriptionCard.css";

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
  
  if (
    card.type === "Normal Monster" ||
    card.type === "Flip Effect Monster" ||
    card.type === "Effect Monster" ||
    card.type === "Union Effect Monster"
    ) {
      if(card.card_sets === []) {
        return (
          <div>wait</div>
          )
        }
        console.log(card.card_sets)
    return (
      <>
        <div key={param.id} className="cardDes">
          <div>
            <img src={card.card_images[0].image_url}></img>
          </div>
          <div className="detailCard">
            <div className="name">
              <h1>{card.name}</h1>
            </div>
            <div className="block">
              <div className="font_color">
                <p>{card.race}</p>
              </div>
              <div className="font_color">
                <p>{card.attribute}</p>
              </div>
              <div className="font_color">
                <p>level {card.level}</p>
              </div>
            </div>
            <div className="block">
              <div className="font_color">
                <p>type: {card.type}</p>
              </div>
            </div>
            <div className="block">
              <div className="font_color">
                <p>ATK / {card.atk}</p>
              </div>
              <div className="font_color">
                <p>DEF / {card.def}</p>
              </div>
            </div>
            <div className="block font_color">
              <p>{card.desc}</p>
            </div>
            <div className="id">
              <p>Id: {card.oldId}</p>
            </div>
          </div>
        </div>

        <div className="price">
          <div className="rarity">
            <p>rarity</p>
            {/* <h2>{card.card_sets[0].set_rarity}</h2> */}
          </div>
          <div className="cost">
            <div className="bubble1">
              <h2>ebay_price</h2>
              <p>{card.card_prices[0].ebay_price}</p>
            </div>
            <div className="bubble2">
              <h2>amazon_price</h2>
              <p>{card.card_prices[0].amazon_price}</p>
            </div>
          </div>
          <p className="fin">
            Duel your way to victory, and let the heart of the cards guide you.
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div key={param.id} className="cardDes">
          <div>
            <img src={card.card_images[0].image_url}></img>
          </div>
          <div className="detailCard">
            <div className="block name">
              <h1>{card.name}</h1>
            </div>
            <div className="block">
              <div className="font_color">
                <p>{card.race}</p>
              </div>
              <div className="font_color">
                <p>type: {card.type}</p>
              </div>
            </div>
            <div className="block font_color">
              <p>{card.desc}</p>
            </div>
            <div className="id">
              <p>Id: {card.oldId}</p>
            </div>
          </div>
        </div>
        <div className="price">
          <div className="rarity">
            <p>rarity</p>
            <h2>{card.card_sets[0].set_rarity}</h2>
          </div>
          <div className="cost">
            <div className="bubble1">
              <h2>ebay_price</h2>
              <p>{card.card_prices[0].ebay_price}</p>
            </div>
            <div className="bubble2">
              <h2>amazon_price</h2>
              <p>{card.card_prices[0].amazon_price}</p>
            </div>
          </div>
          <p className="fin">
            Duel your way to victory, and let the heart of the cards guide you.
          </p>
        </div>
      </>
    );
  }
}

export default DescriptionCard;
