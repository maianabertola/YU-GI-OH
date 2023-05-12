import React from "react";
import Header_Bottom from "../conponents/Header_Bottom";
import Callout from "../conponents/Callout";
import magicienne from "../assets/magicienne.png";
import duel from "../assets/duel.jpeg";
import bestMonsters from "../assets/yugioh-characters-category.jpeg";

function Home_Page() {
  return (
    <>
      <Header_Bottom />
      <Callout
        title={"One website, all your cards"}
        text={
          "Explore the complete collection of Yu-Gi-Oh cards and build your ultimate deck today!"
        }
        cta={"Get them all"}
        img={duel}
        color={"blue"}
      />
      <Callout
        title={"Unleash your creativity"}
        text={
          "Create your custom Duel Monster in 2 minutes to take on any duel and face the toughest opponents"
        }
        cta={"Create now"}
        img={bestMonsters}
        color={"violet"}
      />
      <Callout
        title={"Enter the Legend"}
        text={
          "Step into the legendary world of Yu-Gi-Oh and experience the ultimate dueling adventure!"
        }
        cta={"Discover"}
        img={magicienne}
        color={"darkBlue"}
      />
    </>
  );
}

export default Home_Page;
