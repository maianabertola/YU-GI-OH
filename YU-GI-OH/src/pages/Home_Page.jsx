import React from "react";
import Header_Bottom from "../conponents/Header_Bottom";
import Callout from "../conponents/Callout";
import Footer from "../conponents/Footer";
import img_encart1 from "../assets/Img_encart1.jpeg";
import blueDragon from "../assets/blue-eyes-ultimate-dragon-anime-dragon-trading-card-games-yu-gi-oh-hd-wallpaper-preview.jpeg";
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
        buttonText={"Get them all"}
        img={duel}
        color={"blue"}
      />
      <Callout
        title={"Unleash your creativity"}
        text={
          "Create your custom Duel Monster in 2 minutes to take on any duel and face the toughest opponents"
        }
        buttonText={"Create now"}
        img={bestMonsters}
        color={"violet"}
      />
      <Callout
        title={"Enter the Legend"}
        text={
          "Step into the legendary world of Yu-Gi-Oh and experience the ultimate dueling adventure!"
        }
        buttonText={"Discover"}
        img={magicienne}
        color={"darkBlue"}
      />
    </>
  );
}

export default Home_Page;
