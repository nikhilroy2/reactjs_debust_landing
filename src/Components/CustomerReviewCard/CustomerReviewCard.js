import React from "react";
import "./CustomerReviewCard.css";
function CustomerReviewCard({
  card_icon,
  rating,
  name,
  name_url,
  description,
  reviewed,
  reviewed_url,
}) {
  return (
    <div id="CustomerReviewCard">
      <div className="review_card_header d-flex">
        <div className="box img_box">
          <img src={card_icon} alt="card_icon.png" />
        </div>
        <div className="box flex-grow-1">
          <div className="rating_wrapper w-100">
            <ul className="list-unstyled d-flex">
              <li className="me-2 mb-2">
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li className="me-2 mb-2">
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li className="me-2 mb-2">
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li className="me-2 mb-2">
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li className="me-2 mb-2">
                <i className="fa-solid fa-star-half-stroke" />
              </li>
            </ul>
            <strong>{rating}</strong>
          </div>
          <div className="box_title">
            <a className="text-white" href="#">
              <strong>{name}</strong>
            </a>{" "}
            Reviewd{" "}
            <a className="text-white" href="#">
              <strong>{reviewed}</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="review_card_body">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CustomerReviewCard;
