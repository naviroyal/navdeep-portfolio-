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
        {skills_data.map((skills) => {
          return (
            <section className="skills-section">
              <section>
                <SkillsCard skills={skills.data} />
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
};
