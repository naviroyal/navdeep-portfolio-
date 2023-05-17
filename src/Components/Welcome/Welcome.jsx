import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";
import { Experience } from "../Experience/Experience";
import "./styles.scss";
import { Skills } from "../Skills/Skills";
export const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <Home id="home" />
      <Experience id="experience" />
      <Skills id="skills" />
      <Contact id="contact" />
    </div>
  );
};
