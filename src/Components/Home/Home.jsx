import React from "react";
import navi from "../../assets/navi-1.jpg";
import men from "../../assets/men.png";
import "./styles.scss";
export const Home = () => {
  return (
    <div id="home">
      <img src={navi} alt="navi" className="img--navi" />
      <p className="hello">Hello I'm</p>
      <p className="name-heading">
        Navdeep Singh
        <span>
          <img
            src={men}
            alt="men"
            style={{ margin: "0vh 1vh", borderBottom: "1px solid black" }}
            height={"50px"}
            width={"50px"}
          />
        </span>
      </p>
      <p className="bio">
        I am a senior software engineer with a focus on front-end development,
        I'm passionate about building exceptional websites and delivering
        immersive user experiences. My skills include HTML5, CSS3, JavaScript,
        TypeScript and Reactjs, along with back-end technologies such as
        Graphql, Hasura, Ruby on Rails and Firebase. I bring a relentless focus
        on quality and attention to detail to every project, and take pride in
        creating elegant, intuitive solutions that exceed client expectations.
        With a love for technology and a commitment to excellence, I'm always
        exploring new web development trends and pushing the boundaries of
        what's possible. If you're looking for a skilled and dedicated software
        engineer, let's chat!
      </p>
    </div>
  );
};
