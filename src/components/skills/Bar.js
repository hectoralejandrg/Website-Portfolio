import React from "react";

const Bar = ({skill, porcent}) => {
  return (
    <div className="bar">
      <div className="bar-shadow">
        <div className="bar-porcent" style={{width: `${porcent}%`}}></div>
      </div>

      <div className="bar-description">
        <div style={{width: `${porcent}%`}}>
          <span>{skill}. %</span>
          <span>{porcent}</span>
        </div>
      </div>
    </div>
  );
};

export default Bar;
