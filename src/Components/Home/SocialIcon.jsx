import React from "react";
import "./styles.scss";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import twitter1 from "../../assets/images/twitter1.png";
import telegram from "../../assets/images/telegram.png";
import leetcode from "../../assets/images/leetcode.png";
import git from "../../assets/images/git.png";

function SocialIcon() {
  return (
    <div className="contact-me-logos">
      <button className="logo-btn">
        <a
          href="https://www.linkedin.com/in/navdeep-singh-684632168/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src={linkedin} alt="linkedin logo" />
        </a>
      </button>
      <button className="logo-btn">
        <a href="https://t.me/navdeep2553" target="_blank" rel="noreferrer">
          <img className="logo" src={telegram} alt="linkedin logo" />
        </a>
      </button>
      <button className="logo-btn">
        <a
          href="https://www.instagram.com/navdeep2553/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src={instagram} alt="linkedin logo" />
        </a>
      </button>
      <button className="logo-btn">
        <a
          href="https://twitter.com/Navdeep2553"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src={twitter1} alt="linkedin logo" />
        </a>
      </button>
      <button className="logo-btn">
        <a href="https://github.com/naviroyal" target="_blank" rel="noreferrer">
          <img className="logo" src={git} alt="github logo" />
        </a>
      </button>
      <button className="logo-btn">
        <a
          href="https://leetcode.com/naviroyal909098/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="logo"
            src={leetcode}
            alt="leetcode logo"
            style={{ backgroundColor: "black" }}
          />
        </a>
      </button>
    </div>
  );
}

export default SocialIcon;
