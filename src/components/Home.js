import React from "react";
// import profile_pic from "../images/athar2.jpg";
import linkedinlogo from "../images/linkedin-icon-2.svg";
export default function Home() {
  return (
    <div className="home page1">
      <div className="hometext">
        <a href="https://www.linkedin.com/in/athar-rasheed-28878451/">
          <img
            src={linkedinlogo}
            alt="logo"
            style={{ width: "48px", height: "48px" }}
          />
        </a>
        <h1>Athar Rasheed</h1>
        
        <p>Software engineer by profession.</p>
        <p>Interested in learning new technologies.</p>
        <p>Passionate about writing quality software solutions.</p>
        <p>Interested in reading, sports, current affairs.</p>
        
      </div>
      <div className="bg"></div>
    </div>
  );
}
