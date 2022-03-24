import React from "react";
import "./DebustLanding.css";
import DippiesCard from "../../Components/DippiesCard/DippiesCard";
function DebustLanding(props) {
  return (
    <div id="DebustLanding">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </div>
  );
}

export default DebustLanding;

const Section1 = () => (
  <section id="Section1">
    <div className="section_container">
      <div className="d-flex flex_wrapper">
        <div className="box box1">
          <h1 className="mb_head">Democratizing Experiences in Web 3.0</h1>
          <h5 className="mb_head">
            Write Reviews. Earn Debust Coins. Make informed decisions with{" "}
            <br />
            authentic decentralized recommendations.
          </h5>
        </div>
        <div className="box ms-auto">
          <DippiesCard overlay={true}></DippiesCard>
        </div>
      </div>
      <div className="btn_wrapper d-flex flex-wrap">
        <a href="#" className="btn_explore_outline mr_15">
          Explore Now
        </a>

        <a href="#" className="btn_creator">
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
            <div className="row">
              {card_object.map((v) => {
                return (
                  <div className="col" key={v.id}>
                    <DippiesCard
                      img_src={v.img}
                      card_footer_symbol={true}
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
    </section>
  );
};
