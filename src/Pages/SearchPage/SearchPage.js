import React from "react";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import DippiesCard from "../../Components/DippiesCard/DippiesCard";
import { Section5 as DebustCoins } from "../DebustLanding/DebustLanding";
function SearchPage(props) {
  window.document.title = "Search Page";

  return (
    <div id="SearchPage">
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
}

export default SearchPage;

const Section1 = () => {
  const card_object = [
    {
      id: 1,
      img: require("../../Static/img/dippies_img.png"),
    },
    {
      id: 2,
      img: require("../../Static/img/card_img4.png"),
    },
    {
      id: 3,
      img: require("../../Static/img/card_img5.png"),
    },
    {
      id: 4,
      img: require("../../Static/img/card_img6.png"),
    },
    {
      id: 5,
      img: require("../../Static/img/card_img7.png"),
    },
    {
      id: 6,
      img: require("../../Static/img/card_img8.png"),
    },
    {
      id: 7,
      img: require("../../Static/img/card_img9.png"),
    },
    {
      id: 8,
      img: require("../../Static/img/card_img10.png"),
    },
    {
      id: 9,
      img: require("../../Static/img/card_img11.png"),
    },
    {
      id: 10,
      img: require("../../Static/img/card_img12.png"),
    },
    {
      id: 11,
      img: require("../../Static/img/card_img13.png"),
    },
    {
      id: 12,
      img: require("../../Static/img/card_img14.png"),
    },
  ];

  return (
    <section id="Section1">
      <div className="section_container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
        <div className="section_title">
          <h3 className="title">Top Rated NFT Projects</h3>
          <strong className="subtitle">
            Explore & Choose top rated collections of NFT
          </strong>
        </div>

        <div className="section_body section_tab_body">
          <div>
            {/* Tabs navs */}
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                >
                  Arts
                </a>
              </li>
              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                >
                  Top
                </a>
              </li>
              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link active"
                  id="ex1-tab-3"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-3"
                  role="tab"
                  aria-controls="ex1-tabs-3"
                  aria-selected="false"
                >
                  Photography
                </a>
              </li>
              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-4"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-4"
                  role="tab"
                  aria-controls="ex1-tabs-4"
                  aria-selected="false"
                >
                  Collectibles
                </a>
              </li>

              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-5"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-5"
                  role="tab"
                  aria-controls="ex1-tabs-5"
                  aria-selected="false"
                >
                  Domain Name
                </a>
              </li>

              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-6"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-6"
                  role="tab"
                  aria-controls="ex1-tabs-6"
                  aria-selected="false"
                >
                  Music
                </a>
              </li>

              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-7"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-7"
                  role="tab"
                  aria-controls="ex1-tabs-7"
                  aria-selected="false"
                >
                  Tranding Cards
                </a>
              </li>

              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-8"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-8"
                  role="tab"
                  aria-controls="ex1-tabs-8"
                  aria-selected="false"
                >
                  Sports
                </a>
              </li>

              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-9"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-9"
                  role="tab"
                  aria-controls="ex1-tabs-9"
                  aria-selected="false"
                >
                  Virtual Worlds
                </a>
              </li>

              <li className="nav-item mb-2 " role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-10"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-10"
                  role="tab"
                  aria-controls="ex1-tabs-10"
                  aria-selected="false"
                >
                  Utility
                </a>
              </li>
            </ul>
            {/* Tabs navs */}
            {/* Tabs content */}
            <div className="tab-content" id="ex1-content">
              <div
                className="tab-pane fade "
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="1"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="2"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>

              <div
                className="tab-pane fade show active"
                id="ex1-tabs-3"
                role="tabpanel"
                aria-labelledby="ex1-tab-3"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="3"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>

              <div
                className="tab-pane fade"
                id="ex1-tabs-4"
                role="tabpanel"
                aria-labelledby="ex1-tab-4"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="4"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>

              <div
                className="tab-pane fade"
                id="ex1-tabs-5"
                role="tabpanel"
                aria-labelledby="ex1-tab-5"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="5"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>

              <div
                className="tab-pane fade"
                id="ex1-tabs-6"
                role="tabpanel"
                aria-labelledby="ex1-tab-6"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="6"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>

              <div
                className="tab-pane fade"
                id="ex1-tabs-7"
                role="tabpanel"
                aria-labelledby="ex1-tab-7"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="7"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>

              <div
                className="tab-pane fade"
                id="ex1-tabs-8"
                role="tabpanel"
                aria-labelledby="ex1-tab-8"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="8"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>

              <div
                className="tab-pane fade"
                id="ex1-tabs-9"
                role="tabpanel"
                aria-labelledby="ex1-tab-9"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="9"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>

              <div
                className="tab-pane fade"
                id="ex1-tabs-10"
                role="tabpanel"
                aria-labelledby="ex1-tab-10"
              >
                <div className="row g-3 g-md-5">
                  {card_object.map((v) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={v.id}>
                        <DippiesCard
                          img_src={v.img}
                          card_footer_symbol={true}
                          card_footer_symbol_lg={true}
                          full_size={true}
                          card_counter="10"
                        ></DippiesCard>
                      </div>
                    );
                  })}
                </div>

                <PaginationControl></PaginationControl>
              </div>
            </div>
            {/* Tabs content */}
          </div>
        </div>
      </div>
    </section>
  );
};

const PaginationControl = () => {
  return (
    <nav aria-label="Page navigation" className="pagination_wrapper">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link active" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            6
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            7
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            8
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            9
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            10
          </a>
        </li>
        <li className="page-item">
          <a className="page-link page_next" href="#">
            Next{" "}
            <svg
              width={23}
              height={23}
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79183 12.4584H15.4964L10.8197 17.135C10.446 17.5088 10.446 18.1221 10.8197 18.4959C11.1935 18.8696 11.7972 18.8696 12.171 18.4959L18.4864 12.1804C18.8602 11.8067 18.8602 11.2029 18.4864 10.8292L12.1806 4.50419C11.8068 4.13044 11.2031 4.13044 10.8293 4.50419C10.4556 4.87794 10.4556 5.48169 10.8293 5.85544L15.4964 10.5417H4.79183C4.26475 10.5417 3.8335 10.9729 3.8335 11.5C3.8335 12.0271 4.26475 12.4584 4.79183 12.4584Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Section2 = () => {
  return (
    <section id="Section2">
      <DebustCoins></DebustCoins>
    </section>
  );
};
