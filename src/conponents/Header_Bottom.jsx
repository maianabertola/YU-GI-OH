import React from "react";
import "./Header.css";
import ButtonHero from "./ButtonHero";

function Header_Bottom({ theFunction }) {
  console.log(theFunction);
  return (
    <>
      <div className="heroContainer">
        <div className="heroDiscover">
          <h1>Welcome Duelist</h1>
          <div className="paragraphHeroContainer">
            <p className="heroParagraph">
              Explore an extensive collection of Duel Monsters cards like never
              before{" "}
            </p>
          </div>
          <ButtonHero cta={"Discover"} theFunction={theFunction}></ButtonHero>
        </div>
      </div>
    </>
  );
}

export default Header_Bottom;
