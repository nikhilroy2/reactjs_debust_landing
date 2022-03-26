import React from "react";
import "./ContentProgress.css";
function ContentProgress(props) {
  return (
    <div id="ContentProgress">
      <ul className="progress_list list-unstyled">
        <li>
          <div className="d-flex progress_box align-items-center">
            <svg
              width={33}
              height={33}
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={33} height={33} rx={2} fill="#644FBE" />
              <rect x={9} y={9} width={15} height={15} rx={2} fill="white" />
            </svg>
            <span className="progress_name text-nowrap d-block">
              Art & Design
            </span>
            <div className="progress_bar">
              <span className="total_progress" style={{ width: "90%" }}></span>
            </div>
            <span className="rating_count">5.00</span>
          </div>
        </li>
        <li>
          <div className="d-flex progress_box align-items-center">
            <svg
              width={33}
              height={33}
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={33} height={33} rx={2} fill="#644FBE" />
            </svg>
            <span className="progress_name text-nowrap d-block">Rodmap</span>
            <div className="progress_bar">
              <span className="total_progress" style={{ width: "60%" }}></span>
            </div>
            <span className="rating_count" style={{ color: "#C3AFFF" }}>
              4.00
            </span>
          </div>
        </li>

        <li>
          <div className="d-flex progress_box align-items-center">
            <svg
              width={33}
              height={33}
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={33} height={33} rx={2} fill="#644FBE" />
            </svg>
            <span className="progress_name text-nowrap d-block">Benifits</span>
            <div className="progress_bar">
              <span className="total_progress" style={{ width: "70%" }}></span>
            </div>
            <span className="rating_count" style={{ color: "#9F7FFD" }}>
              3.00
            </span>
          </div>
        </li>

        <li>
          <div className="d-flex progress_box align-items-center">
            <svg
              width={33}
              height={33}
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={33} height={33} rx={2} fill="#644FBE" />
            </svg>
            <span className="progress_name text-nowrap d-block">Team</span>
            <div className="progress_bar">
              <span className="total_progress" style={{ width: "15%" }}></span>
            </div>
            <span className="rating_count" style={{ color: "#8F6CF8" }}>
              2.00
            </span>
          </div>
        </li>


        
        <li>
          <div className="d-flex progress_box align-items-center">
            <svg
              width={33}
              height={33}
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={33} height={33} rx={2} fill="#644FBE" />
            </svg>
            <span className="progress_name text-nowrap d-block">Support</span>
            <div className="progress_bar">
              <span className="total_progress" style={{ width: "50%" }}></span>
            </div>
            <span className="rating_count" style={{ color: "#8666E8" }}>
              1.00
            </span>
          </div>
        </li>


      </ul>
    </div>
  );
}

export default ContentProgress;
