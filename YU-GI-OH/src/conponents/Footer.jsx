import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

//ajouter l'image du button en absolute dans l'input
function Footer() {
  return (
    <>
      <footer>
        <div className="text_footer">
          <strong className="strong_footer">Social Media</strong>
          <div className="socialIconsContainer">
            <SocialIcon
              url="https://www.facebook.com/YuGiOhCardEU"
              bgColor="grey"
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
                cursor: "pointer",
              }}
            ></SocialIcon>
            <SocialIcon
              url="https://www.instagram.com/YuGiOhCardEU/"
              bgColor="grey"
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
                cursor: "pointer",
              }}
            ></SocialIcon>
            <SocialIcon
              url="https://www.twitch.tv/YuGiOhCardEU"
              bgColor="grey"
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
                cursor: "pointer",
              }}
            ></SocialIcon>
            <SocialIcon
              url="https://twitter.com/YuGiOhCardEU"
              bgColor="grey"
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
                cursor: "pointer",
              }}
            ></SocialIcon>
            <SocialIcon
              url="https://www.youtube.com/YuGiOhCardEU"
              bgColor="grey"
              style={{
                height: 25,
                width: 25,
                cursor: "pointer",
              }}
            ></SocialIcon>
          </div>
        </div>
        {/* <div className="text_footer">
          <strong className="strong_footer">Find Your Card</strong>
          <input type="search"></input>
        </div> */}
        <div className="text_footer">
          <strong className="strong_footer">Legal</strong>
          <p>This is a student project, please be friendly</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
