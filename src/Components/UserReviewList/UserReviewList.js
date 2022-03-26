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
              <div className="box user_info_box flex-grow-1">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="user_name">Michel Simson</h3>

                  <div className="user_rating">
                    <ul className="list-unstyled">
                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4V6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="review_span">
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
          <div className="list_body">
            <h3 className="review_title">
              Michel Loved the collection of Arts !
            </h3>

            <p>
              Funk, meet web 3. A collection of 8,888 unique digital hippies
              that are building the new free world of dream. Theor decoratioon
              of art is so amazing to watch & explore. Loved their collections a
              lot. Highly appreciated!
            </p>
          </div>
          <div className="list_footer">
            <div className="footer_action">
              <div className="d-flex justify-content-between">
                <div className="box">
                  <button>
                    {" "}
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21ZM9 9L13.34 4.66L12 10H21V12L18 19H9V9ZM1 9H5V21H1V9Z"
                        fill="#C0AAFF"
                      />
                    </svg>{" "}
                    Useful
                  </button>
                  <button>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 14.74C15.8033 14.74 15.18 15.015 14.7033 15.4458L8.1675 11.6416C8.21333 11.4308 8.25 11.22 8.25 11C8.25 10.78 8.21333 10.5691 8.1675 10.3583L14.63 6.59081C15.125 7.04915 15.7758 7.33331 16.5 7.33331C18.0217 7.33331 19.25 6.10498 19.25 4.58331C19.25 3.06165 18.0217 1.83331 16.5 1.83331C14.9783 1.83331 13.75 3.06165 13.75 4.58331C13.75 4.80331 13.7867 5.01415 13.8325 5.22498L7.37 8.99248C6.875 8.53415 6.22417 8.24998 5.5 8.24998C3.97833 8.24998 2.75 9.47831 2.75 11C2.75 12.5216 3.97833 13.75 5.5 13.75C6.22417 13.75 6.875 13.4658 7.37 13.0075L13.8967 16.8208C13.8508 17.0133 13.8233 17.215 13.8233 17.4166C13.8233 18.8925 15.0242 20.0933 16.5 20.0933C17.9758 20.0933 19.1767 18.8925 19.1767 17.4166C19.1767 15.9408 17.9758 14.74 16.5 14.74Z"
                        fill="#C0AAFF"
                      />
                    </svg>{" "}
                    Share
                  </button>
                </div>
                <div className="box">
                  <button>Reply</button>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="list_header">
            <div className="d-flex">
              <div className="box user_box">
                <img src={require("../../Static/img/user.png")} alt="user" />
              </div>
              <div className="box user_info_box flex-grow-1">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="user_name">Michel Simson</h3>

                  <div className="user_rating">
                    <ul className="list-unstyled">
                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>

                      <li>
                        <div className="rating_box">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4V6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
                              fill="var(--text-17)"
                            />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="review_span">
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
          <div className="list_body">
            <h3 className="review_title">
              Michel Loved the collection of Arts !
            </h3>

            <p>
              Funk, meet web 3. A collection of 8,888 unique digital hippies
              that are building the new free world of dream. Theor decoratioon
              of art is so amazing to watch & explore. Loved their collections a
              lot. Highly appreciated!
            </p>
          </div>
          <div className="list_footer">
            <div className="footer_action">
              <div className="d-flex justify-content-between">
                <div className="box">
                  <button>
                    {" "}
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21ZM9 9L13.34 4.66L12 10H21V12L18 19H9V9ZM1 9H5V21H1V9Z"
                        fill="#C0AAFF"
                      />
                    </svg>{" "}
                    Useful
                  </button>
                  <button>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 14.74C15.8033 14.74 15.18 15.015 14.7033 15.4458L8.1675 11.6416C8.21333 11.4308 8.25 11.22 8.25 11C8.25 10.78 8.21333 10.5691 8.1675 10.3583L14.63 6.59081C15.125 7.04915 15.7758 7.33331 16.5 7.33331C18.0217 7.33331 19.25 6.10498 19.25 4.58331C19.25 3.06165 18.0217 1.83331 16.5 1.83331C14.9783 1.83331 13.75 3.06165 13.75 4.58331C13.75 4.80331 13.7867 5.01415 13.8325 5.22498L7.37 8.99248C6.875 8.53415 6.22417 8.24998 5.5 8.24998C3.97833 8.24998 2.75 9.47831 2.75 11C2.75 12.5216 3.97833 13.75 5.5 13.75C6.22417 13.75 6.875 13.4658 7.37 13.0075L13.8967 16.8208C13.8508 17.0133 13.8233 17.215 13.8233 17.4166C13.8233 18.8925 15.0242 20.0933 16.5 20.0933C17.9758 20.0933 19.1767 18.8925 19.1767 17.4166C19.1767 15.9408 17.9758 14.74 16.5 14.74Z"
                        fill="#C0AAFF"
                      />
                    </svg>{" "}
                    Share
                  </button>
                </div>
                <div className="box">
                  <button>Reply</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="load_more_action">
        <button>Show More</button>
      </div>
    </div>
  );
}

export default UserReviewList;
