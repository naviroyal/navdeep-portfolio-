import React from "react";
import "./styles.scss";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience_data } from "../../data";
import ExperienceCard from "./ExperienceCard";

export const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h1 className="heading">Experience & Education</h1>
      <div className="timeline-container">
        <VerticalTimeline>
          {experience_data.map((item) =>
            ExperienceCard({
              company_name: item.name,
              designation: item.designation || "Software Engineer",
              job_description: item.description,
              company_logo: item.img,
              startYear: item.startYear,
              endYear: item.endYear,
            })
          )}
        </VerticalTimeline>
      </div>
    </div>
  );
};
