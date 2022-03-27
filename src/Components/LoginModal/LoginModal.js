import React from "react";
import "./LoginModal.css";
function LoginModal(props) {
  const list_object = [
    {
      id: 1,
      link: "#",
      name: "Metamask",
      semibox: true,
      svg: (
        <svg
          width={54}
          height={54}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 45.6923C37.3235 45.6923 45.6924 37.3235 45.6924 27C45.6924 16.6765 37.3235 8.30768 27 8.30768C16.6766 8.30768 8.30774 16.6765 8.30774 27C8.30774 37.3235 16.6766 45.6923 27 45.6923Z"
            fill="white"
          />
          <path
            d="M42.5805 37.0158H35.2034V27L27 35.0942L18.7967 27V37.0158H11.4195H11.1835C14.4884 42.1984 20.3311 45.6923 27 45.6923C33.669 45.6923 39.5117 42.2566 42.8166 37.0158H42.5805Z"
            fill="#4C4C4C"
          />
          <path
            d="M14.912 32.7515V17.3501L27 29.3095L39.0881 17.3501V32.7515H44.6899C45.3386 30.8846 45.6924 28.9011 45.6924 26.8009C45.6924 16.5917 37.3191 8.30768 27 8.30768C16.6809 8.30768 8.30774 16.5917 8.30774 26.8009C8.30774 28.9011 8.66154 30.8846 9.31017 32.7515H14.912Z"
            fill="#FF6B01"
          />
          <path
            opacity="0.1"
            d="M53.8535 27.0005C53.8535 41.8337 41.8291 53.8584 26.996 53.8584C12.1628 53.8584 0.138306 41.8337 0.138306 27.0005C0.138306 12.1674 12.1628 0.142883 26.996 0.142883C41.8289 0.142883 53.8535 12.1674 53.8535 27.0005Z"
            fill="#0B0003"
          />
        </svg>
      ),
    },
    {
      id: 2,
      link: "#",
      name: "CoinBase Wallet",
      semibox: false,
      svg: (
        <svg
          width={54}
          height={54}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
            fill="#000E1D"
          />
          <path
            d="M41.1154 27C41.1154 34.7953 34.7953 41.1154 27 41.1154C19.2047 41.1154 12.8846 34.7953 12.8846 27C12.8846 19.2047 19.2047 12.8846 27 12.8846C34.7953 12.8846 41.1154 19.2047 41.1154 27Z"
            stroke="#F9F9F9"
            strokeWidth={5}
          />
        </svg>
      ),
    },
    {
      id: 3,
      link: "#",
      name: "Ubiq Wallet",
      semibox: false,
      svg: (
        <svg
          width={54}
          height={54}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
            fill="#505050"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.2058 13.9237L30.617 27.2946L41.5385 20.2555L30.2058 13.9237Z"
            fill="#333333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.4614 34.2558V20.2032L25.8115 30.3231V43.6154H26.3383"
            fill="#494949"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.7942 40.0763L23.3831 26.7051L12.4615 33.7445L23.7942 40.0763Z"
            fill="#0CA579"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5386 19.7442V33.7969L28.1885 23.69V10.3846H27.6617"
            fill="#00EA90"
          />
        </svg>
      ),
    },
    {
      id: 4,
      link: "#",
      name: "Binance Coin",
      semibox: false,
      svg: (
        <svg
          width={54}
          height={54}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
            fill="#212120"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.3553 24.6793L27.0028 19.0343L32.6525 24.6839L35.9367 21.3975L27.0028 12.4615L18.0688 21.3952L21.3553 24.6793ZM12.4615 27.0005L15.7468 23.7153L19.0321 27.0005L15.7468 30.2857L12.4615 27.0005ZM27.0028 34.968L21.3553 29.3207L18.0642 32.6025L18.0688 32.6071L27.0028 41.5385L35.9368 32.6025L35.939 32.6002L32.6525 29.3184L27.0028 34.968ZM34.9679 27.0013L38.2532 23.7161L41.5385 27.0013L38.2532 30.2865L34.9679 27.0013ZM27.0028 23.6642L30.3352 26.9989H30.3375L30.3352 27.0012L27.0028 30.3358L23.6704 27.0058L23.6658 26.9989L23.6704 26.9943L24.2537 26.4109L24.5385 26.1285L27.0028 23.6642Z"
            fill="#F3BA2F"
          />
        </svg>
      ),
    },
  ];
  return (
    <div id="LoginModal">
      {/* Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <div className="row justify-content-center">
                <div className="col-11 col-md-10 col-xl-9">
                  <div className="content_wrapper">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Connect your wallet
                    </h5>
                    <p className="modal-desc">
                      Connect with one of our available{" "}
                      <a href="#" className="text-white font-weight-bold">
                        wallet
                      </a>{" "}
                      providers or create a new one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body px-0">
              <ul className="list-unstyled action_link_list">
                {list_object.map((v) => {
                  return (
                    <li key={v.id}>
                      <a href={v.link}>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="box">
                            {v.svg}
                            {v.name}
                          </div>
                          {v.semibox && (
                            <div className="box semibox">Popular</div>
                          )}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="modal-footer">
              <button className="btn_show_more">
                Show more{" "}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 12V8H11V12H8L12 16L16 12H13Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
