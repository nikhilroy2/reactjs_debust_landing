import React, { useState } from "react";
import "./NftProjectCard.css";
function NftProjectCard({
  card_lg_img,
  card_img_slice_list,
  card_name,
  user_img,
  btn_content,
  user_name,
}) {
  const [sliceImg, setSliceImg] = useState(card_lg_img);
  const sliceImgHandle = (val) => {
    // console.log(val.target)
    setSliceImg(val.target.src);
  };

  return (
    <div id="NftProjectCard">
      <div className="card_body flex-wrap flex-sm-nowrap">
        <div className="card_lg_img flex-grow-1 flex-sm-grow-0">
          <img src={sliceImg} alt="img" />
        </div>
        <div className="card_img_slicer_wrapper flex-grow-1 flex-sm-grow-0">
          <ul className="list-unstyled d-flex justify-content-between d-sm-block mt-3 mt-sm-0">
            {card_img_slice_list.map((v) => {
              return (
                <li key={v.id} className="me-3 me-sm-0">
                  <img
                    onClick={(event) => sliceImgHandle(event)}
                    src={v.list_img}
                    alt="img"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="card_footer">
        <h6 className="ps-lg-5  ps-xxl-0 ms-lg-5 ms-xxl-0">Art Collection</h6>
        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between justify-content-md-around justify-content-xxl-between align-items-center mt-3">
          <div className="box mb-2 mb-sm-0 user_box d-flex align-items-center">
            <img
              src={require("../../Static/img/user1.png")}
              alt="user"
              className="me-3"
            />
            by Arkhan
          </div>
          <div className="box mb-2 mb-sm-0">
            <button className="outline_btn rounded-pill">Total 54 Items</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NftProjectCard;
