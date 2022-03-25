import React from "react";
import "./DebustLanding.css";
import DippiesCard from "../../Components/DippiesCard/DippiesCard";
import CustomerReviewCard from "../../Components/CustomerReviewCard/CustomerReviewCard";
import NftProjectCard from "../../Components/NftProjectCard/NftProjectCard";
import HowItWorkCard from "../../Components/HowItWorkCard/HowItWorkCard";
function DebustLanding(props) {
  return (
    <div id="DebustLanding">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
    </div>
  );
}

export default DebustLanding;

const Section1 = () => (
  <section id="Section1">
    <div className="section_container">
      <div className="d-flex flex_wrapper flex-wrap flex-xl-nowrap">
        <div className="box box1">
          <h1 className="mb_head">Democratizing Experiences in Web 3.0</h1>
          <h5 className="mb_head">
            Write Reviews. Earn Debust Coins. Make informed decisions with{" "}
            <br />
            authentic decentralized recommendations.
          </h5>
        </div>
        <div className="box me-auto me-lg-0 ms-auto mb-5 mb-lg-0">
          <DippiesCard overlay={true}></DippiesCard>
        </div>
      </div>
      <div className="btn_wrapper d-flex flex-wrap">
        <a href="#" className="btn_explore_outline mr_15 mb-3 mb-sm-0">
          Explore Now
        </a>

        <a href="#" className="btn_creator mb-3 mb-sm-0">
          Get Started
        </a>
      </div>
    </div>
  </section>
);

const Section2 = () => {
  const card_object = [
    {
      id: 1,
      img: require("../../Static/img/dippies_img.png"),
    },
    {
      id: 2,
      img: require("../../Static/img/card_img2.png"),
    },
    {
      id: 3,
      img: require("../../Static/img/card_img3.png"),
    },
  ];
  return (
    <section id="Section2">
      <div className="section_container">
        <div className="section_title">
          <h3 className="title">Explore NFT Projects</h3>
          <strong className="subtitle">
            Spot Trends, Measure & Track BUSTED Ratings
          </strong>
        </div>
      </div>
      <div className="section_container lg_container">
        <div className="section_body">
          <div className="section_body_card_wrapper">
            <div className="row gy-4">
              {card_object.map((v) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                    <DippiesCard
                      img_src={v.img}
                      card_footer_symbol={true}
                      full_size={true}
                    ></DippiesCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section3 = () => {
  const review_object1 = [
    {
      id: 1,
      card_icon: require("../../Static/img/card_icon.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description:
        "“Great customer service , fast reply & quickly solved my problems. Pleased with their activities“",
    },
    {
      id: 2,
      card_icon: require("../../Static/img/card_icon2.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities. I would highly recommend them for any
          service because of their customer satisfaction ability & capability to
          turn your problems into a great solution at the end of the run, “
        </>
      ),
    },
    {
      id: 3,
      card_icon: require("../../Static/img/card_icon3.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities “
        </>
      ),
    },
  ];

  const review_object2 = [
    {
      id: 1,
      card_icon: require("../../Static/img/card_icon4.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities. I would highly recommend them for any
          service because of their customer satisfaction ability & capability to
          turn your problems into a great solution at the end of the run,
        </>
      ),
    },
    {
      id: 2,
      card_icon: require("../../Static/img/card_icon5.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities. I would highly recommend them for any
          service because of their customer Great customer service , fast reply
          & quickly solved my problems. Pleased with their activitiesGreat
          customer service , fast reply & quickly solved my problems. Pleased
          with their activitiessatisfaction ability & capability to turn your
          problems into a great solution at the end of the run,
        </>
      ),
    },
  ];

  const review_object3 = [
    {
      id: 1,
      card_icon: require("../../Static/img/card_icon6.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities “
        </>
      ),
    },
    {
      id: 2,
      card_icon: require("../../Static/img/card_icon3.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities “
        </>
      ),
    },
    {
      id: 3,
      card_icon: require("../../Static/img/card_icon7.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities. I would highly recommend them for any
          service because of their customer satisfaction ability & capability to
          turn your problems into a great solution at the end of the run,
        </>
      ),
    },
  ];

  const review_object4 = [
    {
      id: 1,
      card_icon: require("../../Static/img/card_icon4.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities. I would highly recommend them for any
          service because of their customer satisfaction ability & capability to
          turn your problems into a great solution at the end of the run,
        </>
      ),
    },
    {
      id: 2,
      card_icon: require("../../Static/img/card_icon5.png"),
      rating: 4.8,
      name: "Fransisco Totti",
      name_url: "#",
      reviewed: "Snug",
      reviewed_url: "#",
      description: (
        <>
          “ Great customer service , fast reply & quickly solved my problems.
          Pleased with their activities. I would highly recommend them for any
          service because of their customer Great customer service , fast reply
          & quickly solved my problems. Pleased with their activitiesGreat
          customer service , fast reply & quickly solved my problems. Pleased
          with their activitiessatisfaction ability & capability to turn your
          problems into a great solution at the end of the run,
        </>
      ),
    },
  ];

  return (
    <section id="Section3">
      <div className="section_container">
        <div className="section_title">
          <h3 className="title">Explore NFT Projects</h3>
          <strong className="subtitle">
            Spot Trends, Measure & Track BUSTED Ratings
          </strong>
        </div>
      </div>
      <div className="section_container lg_container">
        <div className="section_body">
          <div className="row gy-3 gx-5 justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="col_wrapper">
                {review_object1.map((v) => {
                  return (
                    <CustomerReviewCard
                      key={v.id}
                      card_icon={v.card_icon}
                      rating={v.rating}
                      name={v.name}
                      name_url={v.name_url}
                      reviewed={v.reviewed}
                      reviewed_url={v.reviewed_url}
                      description={v.description}
                    ></CustomerReviewCard>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="col_wrapper">
                {review_object2.map((v) => {
                  return (
                    <CustomerReviewCard
                      key={v.id}
                      card_icon={v.card_icon}
                      rating={v.rating}
                      name={v.name}
                      name_url={v.name_url}
                      reviewed={v.reviewed}
                      reviewed_url={v.reviewed_url}
                      description={v.description}
                    ></CustomerReviewCard>
                  );
                })}
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="col_wrapper">
                {review_object3.map((v) => {
                  return (
                    <CustomerReviewCard
                      key={v.id}
                      card_icon={v.card_icon}
                      rating={v.rating}
                      name={v.name}
                      name_url={v.name_url}
                      reviewed={v.reviewed}
                      reviewed_url={v.reviewed_url}
                      description={v.description}
                    ></CustomerReviewCard>
                  );
                })}
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="col_wrapper">
                {review_object4.map((v) => {
                  return (
                    <CustomerReviewCard
                      key={v.id}
                      card_icon={v.card_icon}
                      rating={v.rating}
                      name={v.name}
                      name_url={v.name_url}
                      reviewed={v.reviewed}
                      reviewed_url={v.reviewed_url}
                      description={v.description}
                    ></CustomerReviewCard>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section4 = () => {
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
    <section id="Section4">
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

      <div className="section_container hiw_section">
        <div className="section_title mb-0 text-center">
          <h3 className="title">How it works ?</h3>
          <strong className="subtitle">
            Learn how our system & process works
          </strong>
        </div>
      </div>
      <div className="section_container lg_container">
        <div className="section_body">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <HowItWorkCard
                leftIcon={true}
                cardClass="firstCard"
                cardLogo={require("../../Static/img/Wallet.png")}
                cardName="Connect Wallet"
                cardDescription="Connect your wallet to get started"
              ></HowItWorkCard>
            </div>
            <div className="col d-flex justify-content-center">
              <HowItWorkCard
                leftIcon={true}
                cardClass="secondCard"
                cardLogo={require("../../Static/img/Review.png")}
                cardName="Publish Review"
                cardDescription="Then publish your review of the service"
              ></HowItWorkCard>
            </div>
            <div className="col d-flex justify-content-center">
              <HowItWorkCard
                cardClass="thirdClass"
                cardLogo={require("../../Static/img/Earn_Rewards.png")}
                cardName="Earn Rewards"
                cardDescription="Finally Earn your reward after completion"
              ></HowItWorkCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section5 = () => {
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
    },
  ];
  return (
    <section id="Section5">
      <div className="section_container">
        <div className="section_title">
          <h3 className="title">Why use DEBUST Coins ?</h3>
          <strong className="subtitle font_36">
            Use DEBUST Coins to unlock exclusive Membership Tokens like:
          </strong>
        </div>
        <div className="section_body">
          <div className="row">
            {card_object.map((v) => {
              return (
                <div className="col-md-6" key={v.id}>
                  <div className="col_wrapper d-flex align-items-center">
                    <img
                      className={v.className + " cardImg"}
                      src={v.img}
                      alt="img"
                    />
                    <p className="font_36" style={{ lineHeight: "5rem" }}>
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-12">
              <a href="#" className="btn_creator btn_lg mt_71 ms-4">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
