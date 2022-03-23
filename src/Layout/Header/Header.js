import React from "react";

function Header(props) {
  return (
    <header id="Header">
      <div className="section_container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                <img src={require("../../Static/img/logo.png")} alt="logo" />
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link btn_log">
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
