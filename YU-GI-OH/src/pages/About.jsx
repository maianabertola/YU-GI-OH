import React from "react";
import Should_you_buy from "../conponents/Should_you_buy";
import "../pages/About.css";
import image0 from "../../public/assets/image20.png"
import image1 from "../../public/assets/image21.png"
import image2 from "../../public/assets/image22.png"
import image3 from "../../public/assets/image23.png"
function About() {
  return (
    <>
      <>
        <div className="page">
          <div className="left_page">
            <h1>YU-GI-OH</h1>
            <img
              src={image0}
              className="img20"
              alt="image de yugi"
            ></img>
            <div className="p">
              <p>
                Duel Monsters is the central plot of Yu-Gi-Oh. A fictionnal game
                where each player uses cards to "duel" each other in a mock
                battle of fantasy "monsters"
              </p>
            </div>
            <img
              src={image2}
              className="img22"
              alt="image de godzilla"
            ></img>
          </div>
          <div className="page_right">
            <div className="presentation">
              <p>
                遊☆戯☆王, Yūgiō? literally "The King of Games." It’s a shōnen
                manga written and drawn by Kazuki Takahashi, published between
                September 1996 and 2004.
              </p>
            </div>
            <div className="text_page">
              <div>
                <strong>
                  The rules are simple: the first one to lose dies.
                </strong>
              </div>
              <p>Kazuki Takahashi, creator of Yu-Gi-Oh !</p>
            </div>
            <div className="images">
              <img
                src={image1}
                className="image21"
                alt="image_de_dragon"
              ></img>
              <img
                src={image3}
                className="image23"
                alt="image_de_dragon"
              ></img>
            </div>
            <div className="details">
              <div>
                <p>
                  The fictional card game discovered by thousands of children
                  through the manga and anime, has become a staple of trading
                  card games.
                </p>
              </div>
              <div>
                <p>
                  With the game's popularity, anyone can become a skilled player
                  and participate in countless duels. In the game, players draw
                  cards from their decks and take turns playing them on the
                  field, using a deck of 40-60 cards and an optional "Extra
                  Deck" of up to 15 cards.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </>
      <Should_you_buy />
    </>
  );
}

export default About;
