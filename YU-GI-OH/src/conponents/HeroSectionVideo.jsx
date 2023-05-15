import React from "react";
import "./HeroSectionVideo.css";
import ButtonHero from "./ButtonHero";
import ReactPlayer from "react-player";
import heroVideo from "../assets/Kaiba vs the Pharaoh Atem - Yu-Gi-Oh.mp4";
import { useNavigate } from "react-router-dom";

function HeroSectionVideo({ theFunction, theSection }) {
  return (
    <>
      <section className="heroSection">
        <div className="heroContainerVideo">
          <ReactPlayer
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%"
            className="reactPlayer"
          />
          <div className="overlay">
            <div className="containerHeroInfo">
              <h1>It's time to duel</h1>
              <ButtonHero
                cta={"Join the party"}
                theFunction={theFunction}
              ></ButtonHero>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSectionVideo;
