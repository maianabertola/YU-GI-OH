import React from "react";
import Header_Bottom from "../conponents/Header_Bottom";
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

  // console.log(cards[0]);
  let cardToDisplay = {};
  if (searchCard === "") {
    cardToDisplay = cards;
  } else {
    cardToDisplay = cards.filter((card) =>
      card.name.toLowerCase().includes(searchCard.toLowerCase())
    );
  }
  if (!cards.length) {
    return <div>Wait</div>;
  }

  return (
    <>
    <Header_Bottom />
    <form action="">
      <input
        type="search" className="find" required
        value={searchCard}
        onChange={(event) => {
          setSearchCard(event.target.value);
        }}
      ></input>
    </form>
        <div className="container">
          {cardToDisplay.map((card) => {
            {/* console.log(card); */}
            return (
              <div key={card._id} className="card">
                <Link to={`/all-cards/${card._id}`}>
                <div className="box_Card">
                <img
                  src={card.card_images[0].image_url}
                  alt="card"
                  className="imgC"
                ></img>
                  <h3 className="button-49">{card.name}</h3>
                </div>
                </Link>
              </div>
            );
          })}
        </div>
    </>
  );
}

export default All_Cards;