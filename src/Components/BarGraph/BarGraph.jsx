import React from "react";
import "./styles.scss";
export const BarGraph = ({ data, color }) => {
  // Calculate the maximum value in the data array
  let maxValue = 100;
  const percentages = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
  return (
    <div>
      <div className="graph">
        <div className="y-axis">
          {percentages.map((item) => {
            return <span>{item}%</span>;
          })}
        </div>
        <div className="bar-graph">
          {data.map((value, index) => {
            return (
              <div
                className="bar"
                key={index}
                style={{
                  height: `${(value[1] / maxValue) * 100}%`,
                  backgroundColor: color,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="skills-x-axis">
        {data.map((value, index) => {
          return <div className="x-axis-skill">{value[0]}</div>;
        })}
      </div>
    </div>
  );
};
