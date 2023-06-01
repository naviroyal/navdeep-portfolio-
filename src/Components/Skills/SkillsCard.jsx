import star from "../../assets/images/star.png";
import stary from "../../assets/images/star-y.png";
import "./styles.scss";

export const SkillsCard = (props) => {
  const { skills } = props;

  const getStars = (count) => {
    const elements = [];

    for (let i = 1; i <= count; i++) {
      elements.push(
        <img
          className={"image"}
          src={stary}
          alt="star"
          width={"35px"}
          height={"35px"}
        />
      );
    }

    for (let i = count + 1; i <= 5; i++) {
      elements.push(
        <img
          className={"image"}
          src={star}
          alt="star"
          width={"35px"}
          height={"35px"}
        />
      );
    }
    return elements;
  };

  return (
    <div className="skill-card-container">
      {skills.map((item) => {
        return (
          <div className="skill">
            <p>{item[0]}</p>
            <div>{getStars(item[1])}</div>
          </div>
        );
      })}
    </div>
  );
};
