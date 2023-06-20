import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";
import computer from "../../assets/images/computer.jpg";

function ExperienceCard({
  designation = "Software Engineer",
  job_description = "akass",
  company_name = "xyz",
  company_logo = "",
  startYear,
  endYear,
  icon,
}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "#fff", padding: 0 }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={`${startYear} - ${endYear || "Present"}`}
      icon={<img src={icon} alt="logo" width={"30px"} height={"30px"} />}
      iconStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <aside className="profile-card">
        <header>
          <a href="https://tutsplus.com">
            <img
              src={company_logo}
              alt="logo"
              style={{ height: "7.5vh", width: "14vh" }}
            />
            ;
          </a>
          <h1>{company_name}</h1>

          <h2>{designation}</h2>
        </header>

        <div className="profile-bio">
          <p style={{ textAlign: "justify" }}>{job_description}</p>
        </div>
      </aside>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
