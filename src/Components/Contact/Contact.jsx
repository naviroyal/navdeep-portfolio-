import React from "react";
import "./contactMeStyles.scss";
import linkedin from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";
import twitter1 from "../../assets/twitter1.png";
import instagram from "../../assets/instagram.png";
export const Contact = () => {
  return (
    <div id="contact">
      <section className="contact-me">
        <div className="contact-me-copyright">
          Copyright ©2023 | Navdeep Singh
        </div>
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
        </div>
      </section>
    </div>
  );
};
