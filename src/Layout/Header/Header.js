import React, { useState } from "react";
import "./Header.css";
function Header(props) {
  const [scrollClass, setScrollClass] = useState("");
  window.addEventListener("scroll", (e) => {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      setScrollClass("Header_scroll_action");
    } else {
      setScrollClass("");
    }
  });
  return (
    <header id="Header" className={scrollClass}>
      <div className="section_container">
        <nav className="navbar shadow-0 navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center w-100">
              <a className="navbar-brand brand_mr d-lg-none" href="#">
                <img src={require("../../Static/img/logo.png")} alt="logo" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" style={{fontSize: '3rem'}} />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand brand_mr d-lg-block d-none" href="#">
                <img src={require("../../Static/img/logo.png")} alt="logo" />
              </a>
              <ul className="navbar-nav navbar-nav1 me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Marketplace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Stats
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Community
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item">
                    <form action="" className="search_header_form">
                      <div className="input-group rounded position-relative">
                        <span
                          className="input-group-text border-0 position-absolute"
                          id="search-addon"
                        >
                          <i className="fas fa-search" />
                        </span>

                        <input
                          type="search"
                          className="form-control rounded"
                          placeholder="Search NFT Projects & Collections"
                          aria-label="Search"
                          aria-describedby="search-addon"
                        />
                      </div>
                    </form>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link btn_log mr_15">
                      Log In
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link btn_creator">
                      For Creators
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
