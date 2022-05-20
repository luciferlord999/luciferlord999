import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import About from "../Pages/About";
import { NavLink, Link } from "react-router-dom";
import App from "../App";
import { Carousel } from "react-bootstrap";
import image1 from "../Asset/image/slider.jpg";
import image2 from "../Asset/image/slider1.jpg";
import image3 from "../Asset/image/slider2.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Header.css";
import Services from "./Pages/Services";
import { isMobile } from "react-device-detect";

// import topknot from "../Asset/image/topknot-bg.jpg";

import Mediacard from "./Mediacard";

// import offer5 from "../Asset/offer/thetop-knot-offer5.jpg";
// import offer6 from "../Asset/offer/thetop-knot-offer6.jpg";
// import offer7 from "../Asset/offer/thetop-knot-offer7.jpg";
// import offer8 from "../Asset/offer/thetop-knot-offer8.jpg";
// import offer9 from "../Asset/offer/thetop-knot-offer9.jpg";
// import offer10 from "../Asset/offer/thetop-knot-offer10.jpg";
// import offer11 from "../Asset/offer/thetop-knot-offer11.jpg";

import Footer from "./Footer";
import Content from "./Content";

export default function Header(props) {
  //  banner api call
  const [service, setService] = useState([]);
  useEffect(() => {
    const getacademyoffer = async () => {
      const res = await fetch("https://www.admin.digitalnawab.com/api/all_categroy");
      const getacademyoffer = await res.json();
      //console.log(getbanner);
      setService(await getacademyoffer);
    };
    getacademyoffer();
  }, []);

  // slider api call
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    const getSlider = async () => {
      const res = await fetch("https://www.admin.digitalnawab.com/api/get-slide");
      const getSlider = await res.json();
      //console.log(getbanner);
      setSlider(await getSlider);
    };
    getSlider();
  }, []);

  // mobile view banner

  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  }, []);

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
                    <i className="fa fa-phone" />
                    +91 9794558476
                  </li>
                </ul>
              </div>
              <div className="dlab-topbar-right topbar-social">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/thetopknotbysnehacharan"
                      className="site-button-link facebook hover"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/thetopknotacademy/"
                      className="site-button-link instagram hover"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/thetopknotbysnehacharan/"
                      className="site-button-link instagram hover"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4Agx-G2k9wBgRGYBJkteZw"
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
                </a>{" "}
              </div>
              {/* <div className="logo-header1 mostion">
                <NavLink to="/academy" className="dez-page">
                  <img src={require("./logoa.png")} alt="" />
                </NavLink>
              </div> */}

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
                  <li>
                    <a
                      ClassName="active"
                      style={{ color: "rgb(239 192 67) " }}
                      href="https://thetopknot.in/"
                    >
                      Home
                    </a>
                    {/* <ul className="sub-menu">
                      <li>
                      <i className="fa fa-chevron-down" />
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
                    <a activeClassName="active" style={{ color: "white" }}>
                      Our Service <i className="fa fa-chevron-down" />
                    </a>
                    <ul className="sub-menu">
                      {service.map((menu, index) => {
                        return (
                          <>
                            <li>
                              <Link
                                to={`/service/${menu.category_url}`}
                                className="dez-page"
                              >
                                {menu.category_title}
                              </Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </li>

                  <li>
                    <NavLink activeClassName="active" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                  {/* <a activeClassName="active" href="/packages">
                  Packages{" "}
                    </a> */}
                   
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/gallery">
                     Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/academy">
                      Academy
                    </NavLink>
                  </li>
                  

                  {/* <li>
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
                  </li> */}
                  <li>
                    <a activeClassName="active" href="appointment">
                      Book Appointment{" "}
                    </a>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/contact">
                      Contact Us{" "}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* main header END */}
      </header>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {slider?.map((getsliders, index) => {
            return (
              <>
                {isMobile ? (
                  <div
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <img
                      className="d-block w-100"
                      src={
                        "https://www.admin.digitalnawab.com/" + getsliders.mobile_slider_url
                      }
                      alt="First slide"
                    />
                  </div>
                ) : (
                  <div
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <img
                      className="d-block w-100"
                      src={
                        "https://www.admin.digitalnawab.com/" + getsliders.slider_url
                      }
                      alt="First slide"
                    />
                   
                  </div>
                )}
              </>
            );
          })}
          
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      </div>

      <Content />

      <Footer />
    </>
  );
}
