import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DescriptionCard.css";
import Button from "../conponents/Button";

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
    if (card.card_sets === []) {
      return <div>wait</div>;
    }
    console.log(card.card_sets);
    return (
      <>
        {/* //Card monster */}
        <main className="mainDescriptionCard">
          <div key={param.id} className="cardDes">
            <div className="imageCardContainer">
              <img
                src={card.card_images[0].image_url}
                className="imgCard"
              ></img>
            </div>
            <div className="detailCard">
              <div className="nameBlock">
                <h1>{card.name}</h1>
              </div>
              <hr></hr>

              <div className="block">
                <div className="contentBlock">
                  <p>Race: {card.race}</p>
                </div>
                <div className="contentBlock">
                  <p>Attribute: {card.attribute}</p>
                </div>
                <div className="contentBlock">
                  <p>Level: {card.level}</p>
                </div>
              </div>
              <div className="block">
                <div className="contentBlock">
                  <p>Type: {card.type}</p>
                </div>
              </div>
              <div className="block">
                <div className="contentBlock">
                  <p>ATK / {card.atk}</p>
                </div>
                <div className="contentBlock">
                  <p>DEF / {card.def}</p>
                </div>
              </div>
              <div className="contentBlock">
                <p>{card.desc}</p>
              </div>
              <div className="block">
                <p style={{ fontSize: 16, marginRight: 16, marginTop: 16 }}>
                  Id: {card.oldId}
                </p>
              </div>
            </div>
          </div>

          <h2>Is it a better investment compared to an NFT?</h2>
          <div className="priceContainer">
            <div className="ebayContainer">
              <div className="cost">
                <div className="bubble1">
                  <p style={{ fontSize: 30 }}>
                    {card.card_prices[0].ebay_price}
                  </p>
                  <h4>Ebay price</h4>
                </div>
              </div>
              <Button
                onClick={() => {
                  window.location.href = "https://www.ebay.fr/";
                }}
                cta={card.card_prices[0].ebay_price > 5 ? "Yes" : "Nope"}
              ></Button>
            </div>

            <div className="amazonContainer">
              <div className="cost">
                <div className="bubble2">
                  <p style={{ fontSize: 30 }}>
                    {card.card_prices[0].amazon_price}
                  </p>
                  <h4>Amazon price</h4>
                </div>
              </div>
              <Button
                onClick={() => {
                  window.location.href = "https://www.amazon.fr/";
                }}
                cta={card.card_prices[0].amazon_price > 5 ? "Yes" : "Nope"}
              ></Button>
            </div>
          </div>
        </main>
      </>
    );

    //Card magic
  } else {
    return (
      <>
        <main className="mainDescriptionCard">
          <div key={param.id} className="cardDes">
            <div className="imageCardContainer">
              <img
                src={card.card_images[0].image_url}
                className="imgCard"
              ></img>
            </div>
            <div className="detailCard">
              <div className="nameBlock">
                <h1>{card.name}</h1>
              </div>
              <div className="block">
                <div className="contentBlock">
                  <p>{card.race}</p>
                </div>
                <div className="contentBlock">
                  <p>type: {card.type}</p>
                </div>
              </div>
              <div className="contentBlock">
                <p>{card.desc}</p>
              </div>
              <div className="block">
                <p style={{ fontSize: 16, marginRight: 16, marginTop: 16 }}>
                  Id: {card.oldId}
                </p>
              </div>
            </div>
          </div>
          <h2>Is it a better investment compared to an NFT?</h2>
          <div className="priceContainer">
            <div className="ebayContainer">
              <div className="cost">
                <div className="bubble1">
                  <p style={{ fontSize: 30 }}>
                    {card.card_prices[0].ebay_price}
                  </p>
                  <h4>Ebay price</h4>
                </div>
              </div>
              <Button
                onClick={() => {
                  window.location.href = "https://www.ebay.fr/";
                }}
                cta={card.card_prices[0].ebay_price > 5 ? "Yes" : "Nope"}
              ></Button>
            </div>

            <div className="amazonContainer">
              <div className="cost">
                <div className="bubble2">
                  <p style={{ fontSize: 30 }}>
                    {card.card_prices[0].amazon_price}
                  </p>
                  <h4>Amazon price</h4>
                </div>
              </div>
              <Button
                onClick={() => {
                  window.location.href = "https://www.amazon.fr/";
                }}
                cta={card.card_prices[0].amazon_price > 5 ? "Yes" : "Nope"}
              ></Button>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default DescriptionCard;
