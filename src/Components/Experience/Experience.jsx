import React from "react";
import "./styles.scss";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience_data } from "../../data";
import ExperienceCard from "./ExperienceCard";

export const Experience = () => {
  return (
    <div id="experience" className="experience">
      <span className="pageHeading" style={{ color: "white" }}>
        <label className="pageHeading-main"> Experience & Education </label>
        <label className="pageHeading-aux">
          {" "}
          My previous jobs and my qualifications.
        </label>
      </span>
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
              icon: item.icon,
            })
          )}
        </VerticalTimeline>
      </div>
    </div>
  );
};
