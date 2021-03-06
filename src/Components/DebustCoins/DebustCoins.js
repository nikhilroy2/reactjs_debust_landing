import React from "react";
import "./DebustCoins.css";
function DebustCoins({ card_object, list_card }) {
  return (
    <div id="DebustCoins">
      <div className="section_container">
        <div className="section_title">
          <h3 className="title">Why use DEBUST Coins ?</h3>
          <strong className="subtitle font_36 res_font">
            Use DEBUST Coins to unlock exclusive Membership Tokens like:
          </strong>
        </div>
        <div className="section_body">
          <div className="row">
            {card_object.map((v) => {
              return (
                <div className="col-md-6 gy-3" key={v.id}>
                  <div className={`col_wrapper d-flex {${!list_card&&'align-items-center'}}`}>
                    {v.isList ? (
                      <span className="card_list_number">{v.id}</span>
                    ) : (
                      <img
                        className={v.className + " cardImg"}
                        src={v.img}
                        alt="img"
                      />
                    )}

                    <p
                      className="font_36 res_font text_fa8"
                      style={{ lineHeight: "5rem" }}
                    >
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
    </div>
  );
}

export default DebustCoins;
