import React from "react";

export default function Skills() {
  const skills = {
    oracle: [
      "Oracle Database",
      "SQL",
      "PLSQL",
      "Oracle Forms",
      "Oracle Reports",
    ],
    web: [
      "HTML",
      "CSS",
      "CSS3",
      "Javascript",
      "C#",
      "PHP",
      "Node JS",
      "Express JS",
      "React",
    ],
    db: ["Oracle", "Mysql", "Mongo DB"],
  };

  const orcl = skills.oracle.map((skill, index) => (
    <div className="skill" key={index}>
      {skill}
    </div>
  ));
  const web = skills.web.map((skill, index) => (
    <div className="skill" key={index}>
      {skill}
    </div>
  ));
  const db = skills.db.map((skill, index) => (
    <div className="skill" key={index}>
      {skill}
    </div>
  ));
  return (
    <div className="home">
      <div className="skills">
        <h1 style={{ marginBottom: "20px" }}>Skills</h1>
        <h3>Oracle Development</h3>
        <div className="skills-detail">{orcl}</div>
        <h3>Web Development</h3>
        <div className="skills-detail">{web}</div>
        <h3>Databases</h3>
        <div className="skills-detail">{db}</div>
      </div>
    </div>
  );
}
