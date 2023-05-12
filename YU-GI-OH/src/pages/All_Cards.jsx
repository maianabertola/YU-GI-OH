import React from "react";
import Header_Bottom from "../conponents/Header_Bottom";
import Layout from "../conponents/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import "./All_Cards.css";
import { Link } from "react-router-dom";

const collectionCard = "https://ironrest.fly.dev/api/yu-gi-oh";

function All_Cards() {
  const [cards, setCards] = useState([]);
  const [searchCard, setSearchCard] = useState("");

  async function fetchCards() {
    try {
      const response = await axios.get(collectionCard);
      setCards(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

  let cardToDisplay = {};
  if (searchCard === "") {
    cardToDisplay = cards;
  } else {
    cardToDisplay = cards.filter((card) =>
      card.name.toLowerCase().includes(searchCard.toLowerCase())
    );
    console.log(cardToDisplay);
  }

  if (!cards.length) {
    return <div>Wait</div>;
  }

  return (
    <>
      <Header_Bottom />
      <input
        type="search"
        value={searchCard}
        onChange={(event) => {
          setSearchCard(event.target.value);
        }}
      ></input>
      <div className="container">
        {cardToDisplay.map((card) => {
          return (
            <div key={card._id} className="card">
              <img src={card.card_images[0].image_url} className="imgC"></img>
              <Link to={`/all-cards/${card._id}`}>
                <h3 className="name">{card.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default All_Cards;
