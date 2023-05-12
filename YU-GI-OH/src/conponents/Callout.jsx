import React from "react";
import "./Callout.css";
import img_encart1 from "../assets/Img_encart1.jpeg";

function Callout({ title, text, buttonText, img, color }) {
  let myStyle;

  // console.log(color);

  if (color === "blue") {
    myStyle = {
      boxShadow: "rgb(187 252 253) 1px 12px 11px 0px",
      backgroundColor: "rgb(0 36 65 / 52%)",
    };
  }
  if (color === "violet") {
    myStyle = {
      boxShadow: "1px 12px 11px 0px #c100ff",
      backgroundColor: "hsl(285, 63%, 14%)",
    };
  }

  if (color === "darkBlue") {
    myStyle = {
      boxShadow: "rgb(236 48 227 / 42%) 1px 12px 11px 0px",
      backgroundColor: "rgb(20 8 61)",
    };
  }

  return (
    <div className="callout" style={myStyle}>
      <div className="textContainer">
        <h2>{title}</h2>
        <p>{text}</p>
        <div>{buttonText}</div>
      </div>
      <img src={img} />
    </div>
  );
}

export default Callout;
