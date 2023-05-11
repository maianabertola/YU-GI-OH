import React from "react";
import "./Callout.css";
import img_encart1 from "../assets/Img_encart1.jpeg";

function Callout() {
  return (
    <div className="callout">
      <div className="textContainer">
        <h2>One website, all your cards</h2>
        <p>
          Explore the complete collection of Yu-Gi-Oh cards and build your
          ultimate deck today!
        </p>
        <button>Get them all</button>
      </div>
      <img src={img_encart1} />
    </div>
  );
}

export default Callout;
