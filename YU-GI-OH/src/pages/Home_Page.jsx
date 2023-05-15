import React, { useEffect } from "react";
import Callout from "../conponents/Callout";
import magicienne from "../assets/magicienne.png";
import duel from "../assets/duel.jpeg";
import bestMonsters from "../assets/yugioh-characters-category.jpeg";
import HeroSectionVideo from "../conponents/HeroSectionVideo";
import { useRef } from "react";

function Home_Page() {
  const callOut = useRef();
  console.log(callOut);

  // console.log(callOut.current.offsetTop);

  function scrollToSection() {
    callOut.current.scrollIntoView();
    console.log(callOut.current);
  }

  // useEffect(() => {
  //   // scrollToSection(callOut);
  // });

  // console.log(callOut.current.offsetTop);

  // console.log(scrollToSection(callOut));

  // const num = 2;

  // function test(value) {
  //   const nomb = value + 2;
  //   return nomb;
  // }

  return (
    <>
      <HeroSectionVideo theFunction={scrollToSection} />
      <section>
        <div ref={callOut}>
          <Callout
            title={"One website, all your cards"}
            text={
              "Explore the complete collection of Yu-Gi-Oh cards and build your ultimate deck today!"
            }
            cta={"Get them all"}
            img={duel}
            color={"blue"}
          />
        </div>
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
      </section>
    </>
  );
}

export default Home_Page;
