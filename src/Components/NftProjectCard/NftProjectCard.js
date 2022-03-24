import React from "react";
import "./NftProjectCard.css";
function NftProjectCard({
  card_lg_img,
  card_img_slice_list,
  card_name,
  user_img,
  btn_content,
  user_name,
}) {
  return (
    <div id="NftProjectCard">
      <div className="card_body ">
        <div className="card_lg_img">
          <img src={card_lg_img} alt="img" />
        </div>
        <div className="card_img_slicer_wrapper">
          <ul className="list-unstyled">
            {card_img_slice_list.map((v) => {
              return (
                <li key={v.id}>
                  <img src={v.list_img} alt="img" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="card_footer">
        <h6>Art Collection</h6>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="box user_box d-flex align-items-center">
            <img
              src={require("../../Static/img/user1.png")}
              alt="user"
              className="me-3"
            />
            by Arkhan
          </div>
          <div className="box">
            <button className="outline_btn rounded-pill">Total 54 Items</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NftProjectCard;
