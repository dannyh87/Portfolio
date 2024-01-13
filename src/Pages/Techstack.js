import React from "react";
import TechStackTile from "../components/TechStackTile";
import TechStackData from "../components/TechStackData";


export default function TechStack() {
  return (
    <div className="home">
      <div className="tech-stack">
        {TechStackData.map((item) => (
          <TechStackTile key={item.title} logo={item.logo} title={item.title} />
        ))}
      </div>
    </div>
  );
}
