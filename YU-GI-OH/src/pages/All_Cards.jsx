import React from "react";
import Header_Bottom from "../conponents/Header_Bottom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./All_Cards.css";
import { Link } from "react-router-dom";
const collectionCard = "https://ironrest.fly.dev/api/yu-gi-oh";

function All_Cards() {
  const [cards, setCards] = useState([]);
  const [searchCard, setSearchCard] = useState("");
  const call = useRef();
  // console.log(where)
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

  function scrollToSection() {
    call.current.scrollIntoView();
  }

  return (
    <>
      <Header_Bottom theFunction={scrollToSection} />
      <form action="" ref={call}>
        <div>
          <input
            type="search"
            className="find"
            placeholder="Type your search"
            required
            value={searchCard}
            onChange={(event) => {
              setSearchCard(event.target.value);
            }}
          ></input>

          <img className="loop" src="../../public/assets/loop.png"></img>

          <i className="fa fa-search"></i>
        </div>
      </form>
      <div className="container">
        {cardToDisplay.map((card) => {
          return (
            <div key={card._id} className="card">
              <Link to={`/all-cards/${card._id}`}>
                <div className="box_Card">
                  <img
                    src={
                      card.card_images
                        ? card.card_images[0].image_url
                        : card.picture
                    }
                    alt="card"
                    className="imgC"
                  ></img>
                  <p className="button-49">{card.name}</p>
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
