import React from "react";
import "./DippiesCard.css";
function DippiesCard(props) {
  return (
    <div id="DippiesCard">
      <div className="card shadow-0">
        <div
          className="bg-image hover-overlay header_img"
          data-mdb-ripple-color="light"
        >
          <img
            src={require("../../Static/img/dippies_img.png")}
            className="img-fluid w-100 card_img"
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            />
          </a>
          <img
            src={require("../../Static/img/card_icon.png")}
            alt="img"
            className="card_img_icon"
          />
        </div>
        <div className="card-body ">
          <strong className="body_title">Dippies</strong>
          <div className="body_subtitle">
            by <a href="#">Dippes-Deployer</a>
            <svg
              width={13}
              height={13}
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.50016 11.9167C3.50998 11.9134 1.08678 9.49017 1.0835 6.49999V6.39166C1.14304 3.41494 3.5939 1.0443 6.57094 1.0838C9.54799 1.1233 11.9351 3.55814 11.9156 6.53538C11.8962 9.51262 9.47747 11.9161 6.50016 11.9167ZM4.01391 6.27791L3.25016 7.04166L5.41683 9.20832L9.75016 4.87499L8.98641 4.10582L5.41683 7.67541L4.01391 6.27791Z"
                fill="#00B2FF"
              />
            </svg>
          </div>
          <p className="card-text">
            Funk, meet web 3. A collection of <br /> 8,888 unique digital hippies that
            are building the <br /> new free world of dream
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default DippiesCard;
