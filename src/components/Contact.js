import React from "react";

export default function Contact() {
  return (
    <div className="home">
      <div className="contact">
        <h1>Contact Details</h1>
        <div className="contact-details">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                <h4>Phone & Whatsapp</h4>
              </div>
              <div className="flip-card-back">
                <h3>
                  <span>&#128222;</span>+92-306-4481304
                </h3>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                <h4>Phone</h4>
              </div>
              <div className="flip-card-back">
                <h3>
                  <span>&#128222;</span>
                  +92-348-5713009
                </h3>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                <h4>Email</h4>
              </div>
              <div className="flip-card-back">
                <h3>
                  <span>&#9993; </span>
                  <a
                    href="mailto:athar3432003@gmail.com"
                    style={{ color: "white" }}
                  >
                    athar3432003@gmail.com
                  </a>
                </h3>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
