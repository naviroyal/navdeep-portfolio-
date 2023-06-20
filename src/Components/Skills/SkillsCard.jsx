import "./styles.scss";

export const SkillsCard = (props) => {
  const { skills } = props;
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
