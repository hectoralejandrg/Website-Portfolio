import React from "react";
import Bar from "./Bar";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="bar-container">
        <Bar skill={"HTML"} porcent={90} />
        <Bar skill={"CSS"} porcent={60} />
        <Bar skill={"JAVASCRIPT"} porcent={85} />
        <Bar skill={"REACT JS"} porcent={80} />
        <Bar skill={"REACT-REDUX"} porcent={60} />
        <Bar skill={"JAVA"} porcent={80} />
      </div>
      <div className="skills-title">
        <h2>My Skills</h2>
      </div>
    </div>
  );
};

export default Skills;
