import { SocialIcon } from "react-social-icons";
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
                height: 32,
                width: 32,
                marginRight: 10,
                cursor: "pointer",
              }}
            ></SocialIcon>
            <SocialIcon
              url="https://www.instagram.com/YuGiOhCardEU/"
              bgColor="grey"
              style={{
                height: 32,
                width: 32,
                marginRight: 10,
                cursor: "pointer",
              }}
            ></SocialIcon>
            <SocialIcon
              url="https://www.twitch.tv/YuGiOhCardEU"
              bgColor="grey"
              style={{
                height: 32,
                width: 32,
                marginRight: 10,
                cursor: "pointer",
              }}
            ></SocialIcon>
            <SocialIcon
              url="https://twitter.com/YuGiOhCardEU"
              bgColor="grey"
              style={{
                height: 32,
                width: 32,
                marginRight: 10,
                cursor: "pointer",
              }}
            ></SocialIcon>
            <SocialIcon
              url="https://www.youtube.com/YuGiOhCardEU"
              bgColor="grey"
              style={{
                height: 32,
                width: 32,
                cursor: "pointer",
              }}
            ></SocialIcon>
          </div>
        </div>

        <div className="text_footer">
          <strong className="strong_footer">Looking for a card?</strong>
          <Link to="/all-cards" className="linkFooter">
            Find it here in one click
          </Link>
        </div>
        <div className="text_footer">
          <strong className="strong_footer">Legal</strong>
          <p>This is a student project, please be friendly</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
