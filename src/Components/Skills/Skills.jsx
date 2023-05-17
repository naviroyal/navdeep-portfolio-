import React from "react";
import { BarGraph } from "../BarGraph/BarGraph";
import { skills_data } from "../../data";
import "./styles.scss";
export const Skills = () => {
  return (
    <div id="skills">
      <h1 className="heading">Skills</h1>
      <div className="graph-container">
        {skills_data.map((skills) => {
          return (
            <section className="graph-section">
              <BarGraph data={skills.data} color={skills.color} />
              <p className="skill-name">{skills.name}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
};
