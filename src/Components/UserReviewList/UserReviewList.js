import React from "react";
import "./UserReviewList.css";
function UserReviewList(props) {
  return (
    <div id="UserReviewList">
      <ul className="list-unstyled review_list_wrapper">
        <li>
          <div className="list_header">
            <div className="d-flex">
              <div className="box user_box">
                <img src={require("../../Static/img/user.png")} alt="user" />
              </div>
              <div className="box user_info_box">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="user_name">Michel Simson</h3>

                  <div className="user_rating"></div>
                </div>
                <span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_4899)">
                      <path
                        d="M14 6.08L6 14.08V15H6.92L14.92 7L14 6.08Z"
                        fill="white"
                        fillOpacity="0.36"
                      />
                      <path
                        d="M14 3.25L4 13.25V17H7.75L17.75 7L14 3.25ZM6.92 15H6V14.08L14 6.08L14.92 7L6.92 15ZM20.71 4.04C21.1 3.65 21.1 3.02 20.71 2.63L18.37 0.289998C17.98 -0.100002 17.35 -0.100002 16.96 0.289998L15 2.25L18.75 6L20.71 4.04Z"
                        fill="white"
                      />
                      <path
                        d="M0 20H24V24H0V20Z"
                        fill="white"
                        fillOpacity="0.36"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4899">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  5 Reviews
                </span>

                <span className="user_location">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="white"
                    />
                  </svg>
                  USA
                </span>
              </div>
            </div>
          </div>
          <div className="list_body"></div>
          <div className="list_footer"></div>
        </li>
      </ul>
    </div>
  );
}

export default UserReviewList;
