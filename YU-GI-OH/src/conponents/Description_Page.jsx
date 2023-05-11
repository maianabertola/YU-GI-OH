import '../conponents/Description_page.css'
import React from 'react'

function Description_Page() {

  return (
    <>
      <div className="page">
        <div className="left_page">
          <h1>YU-GI-OH</h1>
          <img
            src="../public/assets/image20.png"
            className="img20"
            alt="image de yugi"
          ></img>
          <div className="p">
            <p>
              Duel Monsters is the central plot of Yu-Gi-Oh. A fictionnal game
              where each player uses cards to "duel" each other in a mock battle
              of fantasy "monsters"
            </p>
          </div>
          <img
            src="../public/assets/image 22.png"
            className="img22"
            alt="image de godzilla"
          ></img>
        </div>
        <div className="page_right">
          <div className="text_page">
            <div>
              <strong>The rules are simple: the first one to lose dies.</strong>
            </div>
            <p>Kazuki Takahashi, creator of Yu-Gi-Oh !</p>
          </div>
          <div className="images">
            <img
              src="../public/assets/image21.png"
              className="image21"
              alt="image_de_dragon"
            ></img>
            <img
              src="../public/assets/image23.png"
              className="image23"
              alt="image_de_dragon"
            ></img>
          </div>
          <div className="details">
            <div>
              <p>
                The fictional card game discovered by thousands of children
                through the manga and anime, has become a staple of trading card
                games.
              </p>
            </div>
            <div>
              <p>
                With the game's popularity, anyone can become a skilled player
                and participate in countless duels. In the game, players draw
                cards from their decks and take turns playing them on the field,
                using a deck of 40-60 cards and an optional "Extra Deck" of up
                to 15 cards.
              </p>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Description_Page