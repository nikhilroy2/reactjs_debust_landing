import React from "react";
import "./DippiesCard.css";
function DippiesCard({ overlay, card_footer_symbol, img_src=require("../../Static/img/dippies_img.png") }) {
  return (
    <div id="DippiesCard">
      <div className="card shadow-0">
        <div
          className="bg-image hover-overlay header_img"
          data-mdb-ripple-color="light"
        >
          <img
            src={img_src}
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
            Funk, meet web 3. A collection of <br /> 8,888 unique digital
            hippies that are building the <br /> new free world of dream
          </p>
        </div>
      </div>

      {overlay && (
        <div className="card_overlay_box">
          <ul className="list-unstyled d-flex overlay_list">
            <li>
              <img src={require("../../Static/img/card_icon.png")} alt="img" />
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon1.png")}
                alt="overlay_icon1"
              />
              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                5
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon2.png")}
                alt="overlay_icon2"
              />
              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                4
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon3.png")}
                alt="overlay_icon3"
              />

              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                3
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon4.png")}
                alt="overlay_icon4"
              />

              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                2
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon5.png")}
                alt="overlay_icon5"
              />

              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                1
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
          </ul>
          <div className="card_footer_overlay">
            <strong>Fransisco Totti Reviewd Snug</strong>
            <p>
              "Great customer service , fast reply & quickly solved my problems.
              Pleased with their activities"
            </p>
          </div>
        </div>
      )}
      {card_footer_symbol && (
        <div className="card_footer_symbol mt-4 mt-md-5">
          <ul className="list-unstyled d-flex overlay_list justify-content-center flex-wrap">
            <li>
              <img
                src={require("../../Static/img/overlay_icon1.png")}
                alt="overlay_icon1"
              />
              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                5
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon2.png")}
                alt="overlay_icon2"
              />
              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                4
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon3.png")}
                alt="overlay_icon3"
              />

              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                3
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon4.png")}
                alt="overlay_icon4"
              />

              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                2
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
            <li>
              <img
                src={require("../../Static/img/overlay_icon5.png")}
                alt="overlay_icon5"
              />

              <span className="d-flex align-items-center justify-content-center text-center text-white family_poppins mt-2">
                1
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                    fill="url(#paint0_angular_1_3493)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1_3493"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9 8.625) rotate(90) scale(7.125 7.5)"
                    >
                      <stop stopColor="#FFB017" />
                      <stop offset={1} stopColor="#FF8642" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DippiesCard;
