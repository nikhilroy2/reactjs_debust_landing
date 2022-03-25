import React from "react";
import "./HowItWorkCard.css";
function HowItWorkCard({
  cardClass,
  cardLogo,
  cardName,
  cardDescription,
  leftIcon,
}) {
  return (
    <div id="HowItWorkCard" className={cardClass}>
      <div className="card_logo">
        <img src={cardLogo} alt="png" />
      </div>
      <div className="card_content">
        <h4>{cardName}</h4>
        <p className="text_fa8">{cardDescription}</p>
      </div>
      {leftIcon && (
        <svg className="leftIcon"
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 8L21.18 10.82L32.34 22H8V26H32.34L21.18 37.18L24 40L40 24L24 8Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
}

export default HowItWorkCard;
