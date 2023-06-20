import star from "../../assets/images/star.png";
import stary from "../../assets/images/star-y.png";
import "./styles.scss";

export const SkillsCard = (props) => {
  const { skills } = props;
  console.log(props);
  const getStars = (count) => {
    const elements = [];

    for (let i = 1; i <= count; i++) {
      elements.push(
        <img
          className={"image"}
          src={stary}
          alt="star"
          width={"15vh"}
          height={"15vh"}
        />
      );
    }

    for (let i = count + 1; i <= 5; i++) {
      elements.push(
        <img
          className={"image"}
          src={star}
          alt="star"
          width={"15vh"}
          height={"15vh"}
        />
      );
    }
    return elements;
  };

  return (
    <div
      className="skill"
      style={{
        background: "rgba(52,152,219,0.2)",
      }}
    >
      <p>{skills.name}</p>
      <div
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottomLeftRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
      >
        <img
          src={skills.img}
          height={"70px"}
          width={"80px"}
          style={{ borderRadius: "100%", padding: "10px" }}
          alt="logo"
        />
      </div>
    </div>
  );
};
