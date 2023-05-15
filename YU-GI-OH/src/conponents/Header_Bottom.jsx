import React from "react";
import "./Header.css";
import Button from "./Button";

function Header_Bottom() {
  return (
    <>
      <div className="heroContainer">
        <div className="heroDiscover">
          <h1>Welcome Duelist</h1>
          <p>It's time to Du-du-duel!</p>
          <Button cta={"Discover"}></Button>
        </div>
      </div>
    </>
  );
}

export default Header_Bottom;
