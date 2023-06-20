import React from "react";
import { SkillsCard } from "./SkillsCard";
import { skills_data } from "../../data";
import "./styles.scss";
export const Skills = () => {
  return (
    <div id="skills">
      <span className="pageHeading" style={{ color: "white" }}>
        <label className="pageHeading-main"> Skills </label>
        <label className="pageHeading-aux">
          {" "}
          My skills and contribution history.
        </label>
      </span>

      <div className="skills-container">
        <div className="board">
          {skills_data.map((item) => {
            return <SkillsCard skills={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
