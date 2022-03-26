import React from "react";
import ReviewWriting from "../../Components/ReviewWriting/ReviewWriting";
import { Link } from "react-router-dom";
import "./SelectedNFTPage.css";
function SelectedNFTPage(props) {
  return (
    <div id="SelectedNFTPage">
      <Section1></Section1>
    </div>
  );
}

export default SelectedNFTPage;

const Section1 = () => {
  return (
    <section id="Section1">
      <div className="section_container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              NFT Collections
            </li>
          </ol>
        </nav>

        <div className="section_body nft_section_body">
          <div className="d-flex align-items-center">
            <div className="flex_box flex_img_box">
              <img
                src={require("../../Static/img/nft_img.png")}
                alt="nft_img.png"
              />
            </div>
            <div className="flex_box flex_content_box flex-grow-1">
              <div className="d-flex align-items-center ">
                <div className="box">
                  <img
                    src={require("../../Static/img/card_icon.png")}
                    className="user_icon"
                    alt="card_icon"
                  />
                </div>
                <div className="user_content_box">
                  <h4>Dippies</h4>
                  by <a href="#">Dippes-Deployer</a>{" "}
                  <svg
                    width={13}
                    height={13}
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.49992 11.9167C3.50974 11.9134 1.08654 9.49017 1.08325 6.49999V6.39166C1.1428 3.41494 3.59365 1.0443 6.5707 1.0838C9.54774 1.1233 11.9348 3.55814 11.9154 6.53538C11.8959 9.51262 9.47723 11.9161 6.49992 11.9167ZM4.01367 6.27791L3.24992 7.04166L5.41659 9.20832L9.74992 4.87499L8.98617 4.10582L5.41659 7.67541L4.01367 6.27791Z"
                      fill="#00B2FF"
                    />
                  </svg>
                </div>

                <div className="nft_rating_wrapper ms-auto">
                  <ul className="list-unstyled d-flex overlay_list">
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
              </div>

              <p className="nft_desc">
                Funk, meet web 3. A collection of 8,888 unique digital hippies
                that are building the new free world of dream
              </p>

              <div className="nft_foot_content">
                <span>Photography</span>
                <div className="recent_review">
                  <span className="rating_count">4.8</span> Recent Reviews (18)
                </div>
              </div>
            </div>
          </div>
          <ReviewWriting></ReviewWriting>
        </div>
      </div>
    </section>
  );
};
