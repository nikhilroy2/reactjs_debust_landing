import React from "react";
import ReviewWriting from "../../Components/ReviewWriting/ReviewWriting";
import ContentProgress from "../ContentProgress/ContentProgress";
import UserReviewList from "../../Components/UserReviewList/UserReviewList";
import NftProjectCard from "../../Components/NftProjectCard/NftProjectCard";
import DebustCoins from "../../Components/DebustCoins/DebustCoins";
import { Link } from "react-router-dom";
import "./SelectedNFTPage.css";
function SelectedNFTPage(props) {
  window.document.title = "Selected NFT Page";

  return (
    <div id="SelectedNFTPage">
      <Section1></Section1>
      <Section2></Section2>
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
          <div className="d-flex align-items-center flex-wrap flex-lg-nowrap">
            <div className="flex_box flex_img_box mb-3 mb-lg-0">
              <img
                src={require("../../Static/img/nft_img.png")}
                alt="nft_img.png"
              />
            </div>
            <div className="flex_box flex_content_box flex-grow-1">
              <div className="d-flex align-items-center flex-wrap flex-sm-nowrap ">
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

                <div className="nft_rating_wrapper ms-sm-auto mt-3 mt-sm-0">
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

              <div className="nft_foot_content flex-wrap d-flex">
                <span>Photography</span>
                <div className="recent_review">
                  <span className="rating_count">4.8</span> Recent Reviews (18)
                </div>
              </div>
            </div>
          </div>
          <ReviewWriting></ReviewWriting>
          <ContentProgress></ContentProgress>
          <UserReviewList></UserReviewList>
        </div>
      </div>
      <div className="BrowseByCategoryWrapper">
        <BrowseByCategory></BrowseByCategory>
      </div>
    </section>
  );
};

const BrowseByCategory = () => {
  const card_object = [
    {
      id: 1,
      card_lg_img: require("../../Static/img/nft_project_img1.png"),
      card_img_slice_list: [
        {
          id: 1,
          list_img: require("../../Static/img/nft_project_img2.png"),
        },
        {
          id: 2,
          list_img: require("../../Static/img/nft_project_img3.png"),
        },
        {
          id: 3,
          list_img: require("../../Static/img/nft_project_img4.png"),
        },
      ],
      card_name: "Art Collection",
      user_img: require("../../Static/img/user1.png"),
      btn_content: "Total 54 Items",
      user_name: "by Arkhan",
    },
    {
      id: 2,
      card_lg_img: require("../../Static/img/nft_project_img5.png"),
      card_img_slice_list: [
        {
          id: 1,
          list_img: require("../../Static/img/nft_project_img6.png"),
        },
        {
          id: 2,
          list_img: require("../../Static/img/nft_project_img7.png"),
        },
        {
          id: 3,
          list_img: require("../../Static/img/nft_project_img8.png"),
        },
      ],
      card_name: "Photography Collection",
      user_img: require("../../Static/img/user2.png"),
      btn_content: "Total 54 Items",
      user_name: "by Arkhan",
    },
    {
      id: 3,
      card_lg_img: require("../../Static/img/nft_project_img5.png"),
      card_img_slice_list: [
        {
          id: 1,
          list_img: require("../../Static/img/nft_project_img6.png"),
        },
        {
          id: 2,
          list_img: require("../../Static/img/nft_project_img7.png"),
        },
        {
          id: 3,
          list_img: require("../../Static/img/nft_project_img8.png"),
        },
      ],
      card_name: "Photography Collection",
      user_img: require("../../Static/img/user2.png"),
      btn_content: "Total 54 Items",
      user_name: "by Arkhan",
    },

    {
      id: 4,
      card_lg_img: require("../../Static/img/nft_project_img1.png"),
      card_img_slice_list: [
        {
          id: 1,
          list_img: require("../../Static/img/nft_project_img2.png"),
        },
        {
          id: 2,
          list_img: require("../../Static/img/nft_project_img3.png"),
        },
        {
          id: 3,
          list_img: require("../../Static/img/nft_project_img4.png"),
        },
      ],
      card_name: "Art Collection",
      user_img: require("../../Static/img/user1.png"),
      btn_content: "Total 54 Items",
      user_name: "by Arkhan",
    },

    {
      id: 5,
      card_lg_img: require("../../Static/img/nft_project_img5.png"),
      card_img_slice_list: [
        {
          id: 1,
          list_img: require("../../Static/img/nft_project_img6.png"),
        },
        {
          id: 2,
          list_img: require("../../Static/img/nft_project_img7.png"),
        },
        {
          id: 3,
          list_img: require("../../Static/img/nft_project_img8.png"),
        },
      ],
      card_name: "Photography Collection",
      user_img: require("../../Static/img/user2.png"),
      btn_content: "Total 54 Items",
      user_name: "by Arkhan",
    },

    {
      id: 6,
      card_lg_img: require("../../Static/img/nft_project_img5.png"),
      card_img_slice_list: [
        {
          id: 1,
          list_img: require("../../Static/img/nft_project_img6.png"),
        },
        {
          id: 2,
          list_img: require("../../Static/img/nft_project_img7.png"),
        },
        {
          id: 3,
          list_img: require("../../Static/img/nft_project_img8.png"),
        },
      ],
      card_name: "Photography Collection",
      user_img: require("../../Static/img/user2.png"),
      btn_content: "Total 54 Items",
      user_name: "by Arkhan",
    },
  ];
  return (
    <>
      <div className="section_container">
        <div className="section_title">
          <div className="d-flex justify-content-between align-items-center">
            <div className="box">
              <h3 className="title">Browse By Category</h3>
              <strong className="subtitle">
                Explore exclusive collections of NFT projects & Artworks
              </strong>
            </div>
            <div className="box">
              <a href="#" className="view_all">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section_container lg_container">
        <div className="section_body card_section_body">
          <div className="row g-5">
            {card_object.map((v) => {
              return (
                <div key={v.id} className="col-md-6 col-lg-4">
                  <div className="col_wrapper">
                    <NftProjectCard
                      card_lg_img={v.card_lg_img}
                      card_img_slice_list={v.card_img_slice_list}
                      card_name={v.card_name}
                      user_img={v.user_img}
                      btn_content={v.btn_content}
                      user_name={v.user_name}
                    ></NftProjectCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Section2 = () => {
  const card_object = [
    {
      id: 1,
      img: require("../../Static/img/GoldBricks-3.png"),
      description: (
        <>
          Access to <br />
          Debust events
        </>
      ),
      className: "goldBricks_img",
      isList: true,
    },
    {
      id: 2,
      img: require("../../Static/img/Etherium-3.png"),
      description: (
        <>
          Access to Courses & Workshops <br />
          on Debust NFTs
        </>
      ),
      className: "Etherium_img",
      isList: true,
    },
    {
      id: 3,
      img: require("../../Static/img/Safe-3.png"),
      description: (
        <>
          Insights to the <br />
          Hottest NFT Trends
        </>
      ),
      className: "Safe-3",
      isList: true,
    },
    {
      id: 4,
      img: require("../../Static/img/People-2.png"),
      description: (
        <>
          Early access to Debust <br />
          Membership club
        </>
      ),
      className: "People-3",
      isList: true,
    },
  ];
  return (
    <section id="Section2">
      <DebustCoins list_card={true} card_object={card_object}></DebustCoins>
    </section>
  );
};
