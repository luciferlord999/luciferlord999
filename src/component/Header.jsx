import React from "react";
import ReactDOM from "react-dom";
// import About from "../Pages/About";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      {/* header */}
      <header className="site-header header center mo-left">
        <div className="top-bar bg-primary text-white">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="dlab-topbar-left">
                <ul>
                  <li>
                    <i className="fa fa-phone m-r5" /> +91 936-910-0400
                  </li>
                  <li>
                    <i className="fa fa-map-marker m-r5" /> Vijay Khand, Gomti
                    Nagar, Lucknow, Uttar Pradesh 226010.
                  </li>
                </ul>
              </div>
              <div className="dlab-topbar-right topbar-social">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/"
                      className="site-button-link facebook hover"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/"
                      className="site-button-link twitter hover"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="site-button-link instagram hover"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/"
                      className="site-button-link linkedin hover"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/"
                      className="site-button-link youtube hover"
                    >
                      <i className="fa fa-youtube-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* main header */}
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div className="container clearfix">
              {/* website logo */}
              <div className="logo-header mostion">
                <a href="/" className="dez-page">
                  <img src={require("./logo.png")} alt="" />
                </a>            </div>
              <div className="logo-header1 mostion">
                <NavLink to="/" className="dez-page">
                  <img src={require("./logoa.png")} alt="" />
                </NavLink>
              </div>

              {/* nav toggle button */}
              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
              {/* main nav */}
              <div
                className="header-nav navbar-collapse collapse "
                id="navbarNavDropdown"
              >
                <div className="logo-header mostion">
                  {/* <a href="/" class="dez-page">
                    <img src={require("./logo.png")} />
                  </a> */}
                </div>

                <ul className="nav navbar-nav">
                  <li className="active">
                    <NavLink to="/">
                      Home <i className="fa fa-chevron-down" />
                    </NavLink>
                    {/* <ul className="sub-menu">
                      <li>
                        <NavLink to="/" className="dez-page">
                          Book a salon
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="blog-classic-sidebar.html"
                          className="dez-page"
                        >
                          Book a Studio
                        </a>
                      </li>
                    </ul> */}
                  </li>

                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink activeStyle={{ color:'#5754a8' }} to="/academy">Academy</NavLink>
                  </li>

                  <li>
                    <NavLink>
                      Our Service <i className="fa fa-chevron-down" />
                    </NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/" className="dez-page">
                          UNISEX SALON SERVICES
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="blog-classic-sidebar.html"
                          className="dez-page"
                        >
                          MEN'S BARBER SHOP
                        </a>
                      </li>
                      <li>
                        <a href="blog-detailed-grid.html" className="dez-page">
                          KIDS SALON SERVICES
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      Our Portfolio <i className="fa fa-chevron-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="portfolio-grid-2.html" className="dez-page">
                          PECHANI
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-grid-3.html" className="dez-page">
                          BADRI JWELLERS
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-grid-4.html" className="dez-page">
                          GUL BY AISHWARYA
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-grid-4.html" className="dez-page">
                          GALLERY
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us </NavLink>
                  </li>
                </ul>

             
              </div>
            </div>
          </div>
        </div>
        {/* main header END */}
      </header>
    </>
  );
}
