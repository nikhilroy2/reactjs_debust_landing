import React from "react";
import "./DebustLanding.css";
import DippiesCard from "../../Components/DippiesCard/DippiesCard";
function DebustLanding(props) {
  return (
    <div id="DebustLanding">
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
              <DippiesCard></DippiesCard>
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
    </div>
  );
}

export default DebustLanding;
