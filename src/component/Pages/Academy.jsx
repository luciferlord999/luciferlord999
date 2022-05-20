import React, { useEffect, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import aboutImg3 from "../Pages/academy.jpg";
import Footer from "../Footer";
import emailjs from "emailjs-com";
// import "./Form.css";
import Accordion from "../Accordion";
import Form from "../Form";

import image3 from "../slider2.jpg";
import Salonoffer from "../Salonoffer";
import Owl from "../Owl";

import "../Header.css";
import { Link } from "react-router-dom";

export default function Academy(props) {
  // ... rest of render method code

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

  return (
    <>
      <header className="site-header header center mo-left">
        <div className="top-bar bg-primary text-white">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="dlab-topbar-left">
                <ul>
                  <li>
                    <i className="fa fa-phone m-r5" /> +91 9794558476
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
                  <img src={require("../logo.png")} alt="" />
                </a>{" "}
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
                  <li>
                    <a href="/">Home</a>
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
                  {/* <li>
                    <NavLink activeClassName="active" to="/packages">
                     Packages
                    </NavLink>
                  </li> */}
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
                    <NavLink to="/">
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
                  </li> */}
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

      <div className="page-content bg-white">
        {/* inner page banner */}
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        {/* inner page banner END */}

        <div className="container">
          <div className="section-head text-black text-center">
            <h3 className="m-b10" style={{ color: "#6b4c34" }}>
              TOP KNOT SCHOOL
            </h3>
            <h5>10 YEARS OF EXPERIENCE</h5>

            {/* <h5 className="m-b10">WE ARE THE BEST UNISEX SALON IN LUCKNOW</h5> */}
            <div className="dlab-separator-outer m-b0">
              <div className="dlab-separator text-primary style-icon">
                <i className="flaticon-spa text-primary" />
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-section ftco-no-pb">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-5 order-md-last wrap-about align-items-stretch  ">
                <div className="wrap-about-border ">
                  <div className="img" />
                  <img src={aboutImg3} alt="" />
                </div>
              </div>
              <div className="col-md-7 wrap-about pr-md-4    ">
                <p className="our">
                  The Top Knot Salon is a leading chain of salons in Northern
                  India . The brand Top knot has constantly strived to work on
                  the latest trends in make ups,skin aesthetics and skin
                  essentials with constant focus on make up & Soon aesthetics
                  Training and development to bring out the best in our talent
                  and thereby provide guaranteed excellent services.
                </p>
                <p>
                  Team Top Knot firmly believes that education, information and
                  experience is the key to success and now invite all of you to
                  join in our endeavor to the Salon industry with serve
                  excellence by joining the Top Knot School of Makeup and Beauty
                </p>
                <p>
                  Taking our commitment to the next level, The Top Knot SALON is
                  proud to launch first ever School of Make up ,skin
                  aestheticand beauty with the objective of spreading knowledge,
                  education, awareness and churning out polished professionals
                  to meet today's challenges and tomorrow's opportunities.
                </p>
                <p></p>
              </div>
            </div>
            <p style={{ textAlign: "justify" }}>
              Taking our commitment to the next level, The Top Knot SALON is
              proud to launch first ever School of Make up ,skin aestheticand
              beauty with the objective of spreading knowledge, education,
              awareness and churning out polished professionals to meet today's
              challenges and tomorrow's opportunities.
            </p>
          </div>
        </section>

        <Salonoffer />
        <Owl />

        <section className="py-5  " style={{ background: "#97959524" }}>
          <div className="container py-4">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="m-b10" style={{ color: "#6b4c34" }}>
                  COURSES
                </h2>

                {/* <h5 className="m-b10">WE ARE THE BEST UNISEX SALON IN LUCKNOW</h5> */}
                <div className="dlab-separator-outer m-b0">
                  <div className="dlab-separator text-primary style-icon">
                    <i className="flaticon-spa text-primary" />
                  </div>
                </div>
                <p style={{ textAlign: "center" }}>
                  The courses at our School, for both beginners and
                  professionals, are delivered with passion and years of
                  expertise.
                </p>

                {/* Vertical Tabs For Courses */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                {/* Tabs nav */}
                <div
                  className="nav flex-column nav-pills nav-pills-custom"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link mb-3 p-3 shadow active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <i className="fa fa-graduation-cap mr-2" />
                    <span className="font-weight-bold small text-uppercase">
                      ONLINE COURSES
                    </span>
                  </a>
                  <a
                    className="nav-link mb-3 p-3 shadow"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <i className="	fa fa-book mr-2" />
                    <span className="font-weight-bold small text-uppercase">
                      CRASH COURSES
                    </span>
                  </a>
                  <a
                    className="nav-link mb-3 p-3 shadow"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <i className="fa fa-book mr-2" />
                    <span className="font-weight-bold small text-uppercase">
                      ADVANCED COURSES
                    </span>
                  </a>
                  <a
                    className="nav-link mb-3 p-3 shadow"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <i className="fa fa-check mr-2" />
                    <span className="font-weight-bold small text-uppercase">
                      DIPLOMA COURSES
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-9">
                {/* Tabs content */}
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade shadow rounded bg-white show active p-5"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <h4 className="font-italic mb-4">ONLNE COURSES</h4>
                    <p className="font-italic text-muted mb-2">
                      {/* online course 1 */}
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingOne"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <span className="word">1. Personal Make Up</span>
                              <sapn className="price">
                                {" "}
                                4999/- &nbsp; 5 Days{props.oneprice}{" "}
                              </sapn>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.---</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingTwo"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              <span className="word">
                                2. Professional Makeup Class
                              </span>
                              <span className="price">
                                {" "}
                                9999/- &nbsp; 10 Days{props.twoprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.---</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingThree"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              <span className="word">
                                3. Personal Hairstyling Class
                              </span>
                              <span className="price">
                                {" "}
                                3999/- &nbsp; 05 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingFour"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              <span className="word">
                                4. Professional Hairstyling Class
                              </span>
                              <span className="price">
                                {" "}
                                7999/- &nbsp; 10 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingFive"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                            >
                              <span className="word">5. Nail Art Class</span>
                              <span className="price">
                                {" "}
                                4999/- &nbsp; 05 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingSix"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSix"
                              aria-expanded="false"
                              aria-controls="flush-collapseSix"
                            >
                              <span className="word">6. Henna Mehendi Art</span>
                              <span className="price">
                                {" "}
                                4999/- &nbsp; 07 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSix"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body"></div>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div
                    className="tab-pane fade shadow rounded bg-white p-5"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <h4 className="font-italic mb-4">CRASH COURSE</h4>
                    <p className="font-italic text-muted mb-2">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingSeven"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSeven1"
                              aria-expanded="false"
                              aria-controls="flush-collapseSeven1"
                            >
                              {" "}
                              <span className="word">
                                1. Self Grooming Makeup
                              </span>
                              <span className="price">
                                {" "}
                                15000/- &nbsp; 10 Days{props.oneprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseSeven1"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSeven1"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              <div class="content ans">
                                <p>
                                  It is an act of improving and caring for your
                                  own body and appearances. Self-grooming is far
                                  too essential for{" "}
                                  <strong style={{ fontWeight: "800" }}>
                                    {" "}
                                    career development
                                  </strong>{" "}
                                  .Self-grooming involves bathing daily,
                                  personal hygiene and even dressing. You might
                                  have realized before that when you smile,
                                  people take it as pleasant.{" "}
                                </p>

                                <br />
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    1.Makes you confident.
                                  </strong>
                                  <br />
                                  Once you start working on personal grooming,
                                  you’ll inevitably notice a big change in
                                  yourself. You’ll witness significant
                                  improvement in your self-confidence and
                                  self-esteem.
                                </p>
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    2.Enhances your personality
                                  </strong>
                                  <br />
                                  When you have a pleasing personality, you’ll
                                  be respected and appreciated by everyone. Your
                                  MAKEUP, attire, HAIRSTYLE, body language and
                                  everything that is associated with you are
                                  accountable for improving your personality
                                </p>
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    3.Makes you unique from others.{" "}
                                  </strong>
                                  <br />
                                  A well-groomed person inevitably looks
                                  different from other people . Good dressing
                                  expresses professionalism. The right hairstyle
                                  gives a neat and polished look to your face.
                                  <br />
                                  <br />
                                  <strong style={{ fontWeight: "700" }}>
                                    {" "}
                                    This Course Includes
                                  </strong>
                                  <ul style={{ marginLeft: "25px" }}>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      GUIDELINES ON Health, safety and hygiene{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Skin Primers.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Skin and skincare.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Foundations and concealer application.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Highlighting and contouring.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Eyelash application.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Eyebrow definition and grooming.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Strip eyelash application.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Blusher techniques.{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      Basic eye lining and mascara techniques.{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      SMOKY EYE MAKEUP{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      2 SHADOW BLENDING{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      THIS COURSE ALSO INCLUDES 4 BASIC PARTY
                                      HAIRSTYLES THAT YOU CAN LEANR TO DO
                                      YOURSELF …..THIS WILL BE TAUGHT TO YOU BY
                                      OUR EXPERT{" "}
                                    </li>
                                  </ul>
                                  <br />
                                  <ul style={{ marginLeft: "25px" }}>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      T&C{" "}
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      *DEMOS WILL BE CONDUCTED BY ACADEMY
                                      PRODUCT. STUDENTS WILL PRACTICE WITH THEIR
                                      OWN KIT*{" "}
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      * CLASSES WILL BE HELD 3 TO 5 DAYS A WEEK
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      * CLASS DURATION – 2 HOURS EACHconcealer
                                      application.
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      * 18% GST APPLICABLE ON COURSE FEES .
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      * DURATION OF COURSES CANNOT EXCEED
                                      WITHOUT ANY UNAVOIDABLE CIRCUMSTANCES
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingSeven1"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSeven"
                              aria-expanded="false"
                              aria-controls="flush-collapseSeven"
                            >
                              <span className="word">
                                2. Professional Makeup
                              </span>
                              <span className="price">
                                {" "}
                                50,000/- &nbsp; 1 Months{props.oneprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSeven"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <span>
                                <div class="accordion-body">
                                  <div class="content ans">
                                    <p>
                                      As the name suggests they will be
                                      certified makeup artist who understands
                                      the skin, face and trends and would always
                                      give custom look according to your taste
                                      and many other factors. They can deliver
                                      all kinds of makeup with perfection. The
                                      student shall also Be Learning Basic to
                                      Advanced makeup techniques.{" "}
                                      <strong style={{ fontWeight: "800" }}>
                                        {" "}
                                        Top Benefits for Makeup Artists-
                                      </strong>{" "}
                                      The makeup artists enjoy perks with
                                      increasing experience and clientele in the
                                      market. Here are the top benefits enjoy by
                                      them:{" "}
                                    </p>

                                    <br />
                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        1. Higher Job Opportunities
                                      </strong>
                                      <br />
                                      The makeup artist is a recession-proof
                                      career. Job openings are coming up
                                      frequently in retail sectors, cosmetic
                                      brands, movies set, theatres, and fashion
                                      shows. Further, marriage and parties take
                                      place regularly which need professionals
                                      for offering the desired look.
                                    </p>
                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        2. Travel to Exotic Destination
                                      </strong>
                                      <br />
                                    </p>
                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        3. Higher Pay and Flexibility of Work{" "}
                                      </strong>
                                      <br />

                                      <br />
                                      <br />
                                      <strong style={{ fontWeight: "700" }}>
                                        {" "}
                                        This Course Includes
                                      </strong>
                                      <ol style={{ marginLeft: "25px" }}>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Skin Analysis
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Product Knowledge (according to skin
                                          texture and color)
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Skin prepping
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Color wheel of Makeup
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Complete knowledge of different
                                          Primers & Concealers
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Application Of Blushers
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Application of Highlighters .
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Contouring / Face sculpting techniques
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Lipsticks application and correction–
                                          according to Lip shape{" "}
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Eyebrows shaping and Filling{" "}
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          11. Complete makeup LOOKS..
                                          <strong style={{ fontWeight: "600" }}>
                                            Day makeup /Nude Makeup look/
                                            Exclusive Party makeup/Engagement
                                            makeup / Traditional Indian Bridal
                                            Makeup / Pakistani Makeup Looks
                                          </strong>
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          EXAM – Theory and Practical{" "}
                                        </li>
                                        <li style={{ fontWeight: "600" }}>
                                          {" "}
                                          Certificate Distribution and Student
                                          review session{" "}
                                        </li>
                                      </ol>
                                      <br />

                                      <ul style={{ marginLeft: "25px" }}>
                                        <li
                                          style={{
                                            fontWeight: "600",
                                            color: "red",
                                          }}
                                        >
                                          {" "}
                                          T&C{" "}
                                        </li>
                                        <li
                                          style={{
                                            fontWeight: "600",
                                            color: "red",
                                          }}
                                        >
                                          {" "}
                                          *DEMOS WILL BE CONDUCTED BY ACADEMY
                                          PRODUCT. STUDENTS WILL PRACTICE WITH
                                          THEIR OWN KIT*{" "}
                                        </li>
                                        <li
                                          style={{
                                            fontWeight: "600",
                                            color: "red",
                                          }}
                                        >
                                          {" "}
                                          * CLASSES WILL BE HELD 3 TO 5 DAYS A
                                          WEEK
                                        </li>
                                        <li
                                          style={{
                                            fontWeight: "600",
                                            color: "red",
                                          }}
                                        >
                                          {" "}
                                          * CLASS DURATION – 2 HOURS
                                          EACHconcealer application.
                                        </li>
                                        <li
                                          style={{
                                            fontWeight: "600",
                                            color: "red",
                                          }}
                                        >
                                          {" "}
                                          * 18% GST APPLICABLE ON COURSE FEES .
                                        </li>
                                        <li
                                          style={{
                                            fontWeight: "600",
                                            color: "red",
                                          }}
                                        >
                                          {" "}
                                          * DURATION OF COURSES CANNOT EXCEED
                                          WITHOUT ANY UNAVOIDABLE CIRCUMSTANCES
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingThree"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              <span className="word">
                                3. Personal Hairstyling
                              </span>
                              <span className="price">
                                {" "}
                                8,000/- &nbsp; 07 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingFour"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              <span className="word">
                                4. Professional Hairstyling
                              </span>
                              <span className="price">
                                {" "}
                                30,000/- &nbsp; 01 Months {
                                  props.threeprice
                                }{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <div className="content ans" s>
                                <p>
                                  In a Hair style - Coiffure, a person's&nbsp;
                                  hair &nbsp;is arranged and worn.
                                </p>
                                <p>
                                  Hair&nbsp;is specially styled newly or
                                  elaborately arranged to make it look perfect
                                  of the occasion. It can be styled for a
                                  friend’s Birthday, a formal evening party, for
                                  attending different functions, for your own
                                  wedding functions, and even on a daily routine
                                  for your work place.
                                </p>
                                <p>
                                  A Hair stylist can make one feel more
                                  confident, satisfied and stand apart in
                                  crowds.
                                </p>
                                <p>
                                  A Hair Stylist can do Wonders with the
                                  knowledge of Face shapes for giving a perfect
                                  look required.
                                </p>
                                <p>
                                  <b>&nbsp;</b>
                                  <b style={{ fontWeight: "500" }}>
                                    COURSE CONTENT –
                                  </b>
                                </p>
                                <ul style={{ marginLeft: "25px" }}>
                                  <li>
                                    Importance of personal grooming &amp;
                                    Hygiene
                                  </li>
                                  <li>Knowledge of Hair textures</li>
                                  <li>
                                    Knowledge of Hair tools and electronic
                                    equipment used in doing Hairstyles
                                  </li>
                                  <li>Styling products</li>
                                  <li>
                                    Hair styles included –
                                    <ul>
                                      <li>HAIR PRESSING</li>
                                      <li>HARD CURLS</li>
                                      <li>SOFT CURLS</li>
                                      <li>KRIMPING</li>
                                      <li>BEACH WAVES</li>
                                      <li>BLOW DRY</li>
                                      <li>4 TYPES OF BRAIDS</li>
                                      <li>MESSY BRAID</li>
                                      <li>2 STYLES OF PONYTAILS</li>
                                      <li>2 STYLES OF BUNS</li>
                                      <li>2 STYLES OF BRIDAL BUNS</li>
                                      <li>
                                        5 TYPES OF FRONTS ACCORDING TO FACE
                                        SHAPES
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                                <p>PRACTICAL EXAM ON A MODEL</p>
                                <br />
                                <p>
                                  CERTIFICATION AND SOCIAL MEDIA PRESENSE TO
                                  PUSH START YOUR CARER
                                </p>
                                <br />

                                <p>
                                  <b style={{ fontWeight: "900" }}>
                                    Terms &amp; Conditions
                                  </b>
                                  <b style={{ fontWeight: "900" }}> – </b>
                                </p>
                                <p>
                                  <b style={{ fontWeight: "800" }}>
                                    *DEMOS WILL BE CONDUCTED BY ACADEMY PRODUCT.
                                    STUDENTS WILL PRACTICE WITH THEIR OWN KIT*{" "}
                                  </b>
                                </p>

                                <p>
                                  <b style={{ fontWeight: "800" }}>
                                    *CLASSES WILL BE HELD{" "}
                                  </b>
                                  <b style={{ fontWeight: "800" }}>
                                    <u>3 DAYS A WEEK (ALTERNATE DAYS )</u>
                                  </b>
                                </p>
                                <br />
                                <p>
                                  <b style={{ fontWeight: "800" }}>
                                    *CLASS DURATION – 2 HOURS EACH
                                  </b>
                                </p>
                                <br />
                                <p>
                                  <b style={{ fontWeight: "800" }}>
                                    *18% GST APPLICABLE ON COURSE FEES{" "}
                                  </b>
                                </p>
                                <p>
                                  <b style={{ fontWeight: "800" }}>
                                    *DURATION OF COURSES CANNOT EXCEED WITHOUT
                                    ANY UNAVOIDABLE CIRCUMSTANCES
                                  </b>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingFive"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                            >
                              <span className="word">5. Hair Cutting</span>
                              <span className="price">
                                {" "}
                                25,000/- &nbsp; 15 Days{props.threeprice}{" "}
                              </span>
                            </button>
                            <br />
                          </h6>
                          <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <div className="content ans">
                                <p>
                                  THIS COURSE CAN BE TAKEN UP BY ANY ONE WHO IS
                                  ASPIRING TO BECOME A BEAUTICIAN OR A HAIR
                                  TECHNICIAN. THIS IS A SHORT TERM PROFESSIONAL
                                  COURSE, IN WHICH YOU LEARN ALL BASIC HAIR CUTS
                                  AND GAIN KNOWLEDGE OF HAIR TOOLS AND THEIR
                                  USAGE.
                                </p>
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    Course Content :
                                  </strong>
                                </p>
                                <ul style={{ marginLeft: "25px" }}>
                                  <li style={{ fontWeight: "600" }}>
                                    Personal grooming and hygiene
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Hair tools and machine knowledge
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Sterilization of Hair tools and machines
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Knowledge of Cutting tools and its usage
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Hair textures
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Hair Anatomy
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Hair sectioning
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Hair degrees
                                  </li>
                                </ul>
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    Types of Haircuts
                                  </strong>
                                </p>

                                <ol style={{ marginLeft: "25px" }}>
                                  <br />
                                  <li style={{ fontWeight: "600" }}>
                                    Hair Trim
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Single leveled cut
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    2 step hair cut
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    3 step hair cut
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Blunt cut
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Multi step cut
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Kids hair cut
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Sadhna cut
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Front fringes / bangs
                                  </li>
                                </ol>
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    Styling
                                  </strong>
                                </p>
                                <ol style={{ marginLeft: "25px" }}>
                                  <br />
                                  <li style={{ fontWeight: "600" }}>
                                    Blow dry
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Hair Pressing
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Hair crimping
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Hair curling – Tongs , Soft curls , Hot
                                    rollers, beach waves
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Simple bun
                                  </li>
                                  <li style={{ fontWeight: "600" }}>
                                    Simple braids- Normal, French , Dutch
                                  </li>
                                </ol>
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    Terms &amp; Conditions
                                  </strong>
                                </p>
                                <ul style={{ marginLeft: "25px" }}>
                                  <li>
                                    <strong style={{ fontWeight: "700" }}>
                                      *DEMOS WILL BE CONDUCTED BY ACADEMY
                                      PRODUCT. STUDENTS WILL PRACTICE WITH THEIR
                                      OWN KIT*{" "}
                                    </strong>
                                  </li>
                                  <li>
                                    <strong style={{ fontWeight: "700" }}>
                                      *CLASSES WILL BE HELD{" "}
                                    </strong>
                                    <strong style={{ fontWeight: "700" }}>
                                      <u>3 TO 5 DAYS A WEEK</u>
                                    </strong>
                                  </li>
                                  <li>
                                    <strong style={{ fontWeight: "700" }}>
                                      *CLASS DURATION – 2 HOURS EACH
                                    </strong>
                                  </li>
                                  <li>
                                    <strong style={{ fontWeight: "700" }}>
                                      *18% GST APPLICABLE ON COURSE FEES{" "}
                                    </strong>
                                  </li>
                                  <li>
                                    <strong style={{ fontWeight: "700" }}>
                                      *DURATION OF COURSES CANNOT EXCEED WITHOUT
                                      ANY UNAVOIDABLE CIRCUMSTANCES
                                    </strong>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingSix"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSix"
                              aria-expanded="false"
                              aria-controls="flush-collapseSix"
                            >
                              <span className="word">6. Hair Coloring</span>
                              <span className="price">
                                {" "}
                                30,000/- &nbsp; 15 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSix"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingSeven"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSeven21"
                              aria-expanded="false"
                              aria-controls="flush-collapseSeven21"
                            >
                              <span className="word">
                                7. Mani - Pedi Technician
                              </span>
                              <sapn className="price">
                                {" "}
                                10,000/- &nbsp; 01 Week{props.threeprice}{" "}
                              </sapn>
                            </button>
                          </h6>
                          <div
                            id="flush-collapsSeven21"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSeven21"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingEight"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseEight"
                              aria-expanded="false"
                              aria-controls="flush-collapseEight"
                            >
                              <span className="word">
                                8. Hair Chemical Work
                              </span>
                              <span className="price">
                                {" "}
                                40,000/- &nbsp; 01 Months{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingEight"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingNine"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseNine"
                              aria-expanded="false"
                              aria-controls="flush-collapseNine"
                            >
                              <span className="word">9. Beautician Work</span>
                              <span className="price">
                                {" "}
                                30,000/- &nbsp; 01 Months{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingNine"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <div className="accordion-body">
                                <div className="accordion-body">
                                  <div className="content ans">
                                    <p>
                                      Beauticians are professionals engaged in
                                      improving a client’s appearance through
                                      hair care, nails, skin care and other
                                      beauty therapies. Our crash course
                                      provides you with basic knowledge of all
                                      these streams .. for you to become trained
                                      enough to start as a junior artist in this
                                      career … You can later learn about the
                                      advanced techniques with time and
                                      experience
                                    </p>
                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        COURSE CONTENT :
                                      </strong>
                                    </p>
                                    <ul style={{ marginLeft: "25px" }}>
                                      <li style={{ fontWeight: "600" }}>
                                        Professional Ethics
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Hair tools and machine knowledge
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Skin textures and CTM
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Different Massage Manipulation
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Nail Structure
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Nail paint application
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Basic Nail Art
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Manicure
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Pedicure
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Superfluous Temporary Hair Removal
                                        Techniques
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Face and Body Bleaches
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        SD-TAN Face and Body
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Clean ups
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Basic Facials and its techniques
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Knowledge of diff. brands of facials
                                        according to skin type
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Head massage
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Deep conditioning
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Hair Spa’s – complete knowledge with
                                        product knowledge
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Basic Haircuts – straight/ 2 layered/
                                        kids Haircuts (female)
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Root touch ups
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Global hair color
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Threading – upper lips, eyebrows, face
                                        and body
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        B-Lining & B-wax
                                      </li>
                                    </ul>
                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        Types of Haircuts
                                      </strong>
                                    </p>

                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        Styling
                                      </strong>
                                    </p>

                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        Terms &amp; Conditions
                                      </strong>
                                    </p>
                                    <ul style={{ marginLeft: "25px" }}>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *DEMOS WILL BE CONDUCTED BY ACADEMY
                                          PRODUCT. STUDENTS WILL PRACTICE WITH
                                          THEIR OWN KIT*{" "}
                                        </strong>
                                      </li>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *CLASSES WILL BE HELD{" "}
                                        </strong>
                                        <strong style={{ fontWeight: "700" }}>
                                          <u>3 TO 5 DAYS A WEEK</u>
                                        </strong>
                                      </li>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *CLASS DURATION – 2 HOURS EACH
                                        </strong>
                                      </li>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *18% GST APPLICABLE ON COURSE FEES{" "}
                                        </strong>
                                      </li>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *DURATION OF COURSES CANNOT EXCEED
                                          WITHOUT ANY UNAVOIDABLE CIRCUMSTANCES
                                        </strong>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingTen"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTen"
                              aria-expanded="false"
                              aria-controls="flush-collapseTen"
                            >
                              <span className="word">
                                10. Heena / Mehendi Art
                              </span>
                              <span className="price">
                                {" "}
                                10,000/- &nbsp; 15 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseTen"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTen"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <div className="accordion-body">
                                <div className="content ans">
                                  <p>
                                    We here at TOP KNOT ACADEMY help kick start
                                    your journey in henna art /Mehendi design,
                                    we’ve gathered Henna experts to make you a
                                    pro!!
                                  </p>
                                  <br />
                                  <p>
                                    {" "}
                                    Learn Mehendi designing /Henna art from
                                    basics to advance in just a few days… We
                                    teach you the art of learning to draw
                                    Mehendi designs the SMART WAY & EASY
                                    TECHNIQUES.
                                  </p>
                                  <p>
                                    <strong style={{ fontWeight: "800" }}>
                                      The smart way includes:
                                    </strong>
                                    To analyze designs, break them down, and
                                    observe recurring patterns in designs.
                                  </p>
                                  <br />
                                  <p>
                                    We’re providing you a course aimed at
                                    anybody male or female that wants to know
                                    more about Henna, but are not sure where to
                                    start. This is a great course for beginners
                                    and for those who want to brush up on any
                                    existing techniques. From the basic floral,
                                    peacock and mango designs, to the most
                                    intricate checkered design, this course
                                    covers them all..
                                  </p>
                                  <ul style={{ marginLeft: "25px" }}>
                                    <li style={{ fontWeight: "600" }}>
                                      Introduction & Complete History of mehendi
                                      Design /Henna Art with Detailed Notes
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Easy Technique of Cone making
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Basic shapes (Motifs, Leaves, Flowers,
                                      Extensions, Dots etc. ) used in all types
                                      of henna art .
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Introduction to KHAFEEF henna art design
                                      with detailed Notes
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Practice sessions of khafeef henna art
                                      design
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Introduction to Indian marwari henna art
                                      designsand notes
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Practice Sessions of Indian Marwari Henna
                                      art design.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Introduction to INTRICACY MANDALA DESIGN
                                      in detail & Notes
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Practice sessions of Intricacy Mandal
                                      Design .
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Tips of aftercare henna tips
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Famous 50 Celebrity & Regional Henna
                                      Design Practice Sessions
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      Advance Motifs & Tricks & Secrets by
                                      experts
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingEleven"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseEleven"
                              aria-expanded="false"
                              aria-controls="flush-collapseEleven"
                            >
                              <span className="word">
                                11. Nail Extension & Nail Art
                              </span>
                              <span className="price">
                                {" "}
                                25,000/- &nbsp; 15 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingEleven"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingTweleve"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTweleve"
                              aria-expanded="false"
                              aria-controls="flush-collapseTweleve"
                            >
                              <span className="word">12. Personal Draping</span>
                              <span className="price">
                                {" "}
                                3000/- &nbsp; 03 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapseTweleve"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTweleve"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingthirdteen"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapsethirdteen"
                              aria-expanded="false"
                              aria-controls="flush-collapsethirdteen"
                            >
                              <span className="word">
                                13. Professional Draping
                              </span>
                              <span className="price">
                                {" "}
                                6000/- &nbsp; 06 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapsethirdteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingthirdteen"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h6
                            className="accordion-header"
                            id="flush-headingfifteen"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapsefifteen"
                              aria-expanded="false"
                              aria-controls="flush-collapsefifteen"
                            >
                              <span className="word">
                                14. Eyelash Extension Course
                              </span>
                              <span className="price">
                                {" "}
                                30,000/- &nbsp; 07 Days{props.threeprice}{" "}
                              </span>
                            </button>
                          </h6>
                          <div
                            id="flush-collapsefifteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingfifteen"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">.__</div>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div
                    className="tab-pane fade shadow rounded bg-white p-5"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <h4 className="font-italic mb-4">ADVANCED COURSES</h4>
                    <p className="font-italic text-muted mb-2">
                      <div className="accordion-item">
                        <h6
                          className="accordion-header"
                          id="flush-headingOne"
                          style={{ fontSize: "20px" }}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            <span className="word">
                              1. Advanced Makeup Course
                            </span>
                            <span className="price">
                              {" "}
                              150,000/- &nbsp; 02 Months{props.threeprice}{" "}
                            </span>
                          </button>
                        </h6>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            {" "}
                            <div className="accordion-body">
                              <div className="accordion-body">
                                <div className="content ans">
                                  <p>
                                    This course includes Basic to Advanced
                                    Makeup techniques
                                  </p>
                                  <br />
                                  <p>
                                    {" "}
                                    A makeup artist is incomplete without the
                                    knowledge of{" "}
                                    <strong style={{ fontWeight: "600" }}>
                                      {" "}
                                      Airbrush technique and Advanced
                                      Hairstyling.
                                    </strong>{" "}
                                    You will learn all that is required in this
                                    Advanced course .The value of your
                                    certificate will be appreciable and the
                                    practical knowledge will do you wonders in
                                    your upcoming career. The career which is
                                    one of the most trending …. And makes you
                                    stand out in crowds{" "}
                                  </p>
                                  <p>
                                    <strong style={{ fontWeight: "800" }}>
                                      Your knowledge will be deep set ….
                                    </strong>
                                    It will include Detailed Study of Different
                                    Face Shapes, Eye Shapes, Lip Shapes, Nose
                                    Shapes And How To Work On them as a SKILLED
                                    MAKEUP ARTIST.
                                  </p>
                                  <br />
                                  <p>
                                    <strong style={{ fontWeight: "800" }}>
                                      This course includes :
                                    </strong>
                                  </p>

                                  <ul style={{ marginLeft: "25px" }}>
                                    <li style={{ fontWeight: "600" }}>
                                      1. Product Knowledge (including
                                      International Brands )
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      2. Skin Analysis (textures, color, skin
                                      problems etc.)
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      3. Primers and Concealers
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      4. Different bases – Liquid, Cream, BB
                                      creams, CC creams, Stick, Mousse,
                                      waterproof makeup, Airbrush makeup
                                      techniques etc.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      5. Blushers – powder, liquid, tints,
                                      Airbrush
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      6. Contouring – Powder, cream, Airbrush
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      7. Highlighting – Powder, liquid , balms
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      8. Creating and refilling Eyebrows –
                                      powder, balms etc.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      9. Professional Lipstick Application
                                      techniques according to Lip Shapes
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      10. Different Eye makeup techniques –
                                      Basic to Advanced
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      11. COMPLETE knowledge of Hair styling (
                                      basic to Advanced ) according to Face
                                      Shapes
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      12. Complete knowledge of Airbrush
                                      technique, including knowledge of machine
                                      mechanism and its care.
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      13. Complete Makeup Demo’s By the Best
                                      artists of TOP KNOT STUDIO & ACADEMY
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      14. FINAL EXAM – THEORY AND PRACTICAL will
                                      be held for the student
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      15. Complete photo shoot for the Models
                                      for each student
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      16. Promotion by TOP KNOT on Social Media
                                      … to push start your Careers
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      17. Special discounts on Makeup Products
                                      that are purchased from the Academy
                                    </li>
                                  </ul>

                                  <p>
                                    <strong style={{ fontWeight: "600" }}>
                                      THIS COURSE INCLUDES DIFFERENT COMPLETE
                                      MAKEUP DEMO’S FROM OUR CELEBRITY ARTISTS &
                                      SENIOR ARISTS -
                                    </strong>
                                  </p>

                                  <ul style={{ marginLeft: "25px" }}>
                                    <li style={{ fontWeight: "600" }}>
                                      CORRECTIVE MAKEUP{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      DAY MAKEUP{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      PARTY MAKEUP LOOK
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      COCKTAIL MAKEUP{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      TRADITIONAL INDIAN BRIDAL LOOK
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      CHRISTIAN BRIDAL LOOK{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      SABYASACHI LOOK{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      GLOSSY MAKEUP LOOK{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      PAKISTANI MAKEUP LOOK{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      RAMP MAKEUP LOOK{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      GROOM MAKEUP{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      BENGALI BRIDAL LOOK{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      SOUTH INDIAN BRIDE
                                    </li>
                                  </ul>

                                  <p>
                                    T&C – *DEMOS WILL BE CONDUCTED BY ACADEMY
                                    PRODUCT. STUDENTS WILL PRACTICE WITH THEIR
                                    OWN KIT* * CLASSES WILL BE HELD – 3 DAYS
                                    MAKEUP CLASS & 3 DAYS HAIR STYLING CLASS ON
                                    ALTERNATE DAYS ON THE WEEK * CLASS DURATION
                                    – 2 HOURS EACH * 18% GST APPLICABLE ON
                                    COURSE FEES * DURATION OF COURSES CANNOT
                                    EXCEED WITHOUT ANY UNAVOIDABLE CIRCUMSTANCES
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6
                          className="accordion-header"
                          id="flush-headingTwo"
                          style={{ fontSize: "20px" }}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            <span className="word">
                              2. Advanced Hairstyling Course
                            </span>
                            <span className="price">
                              {" "}
                              50,000/- &nbsp; 1.5 Months{props.threeprice}{" "}
                            </span>
                          </button>
                        </h6>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div class="accordion-body">
                              <div class="content ans">
                                <p>
                                  In a Hair style - Coiffure, a person's hair is
                                  arranged and worn
                                </p>
                                <br />
                                <p>
                                  Hair is specially styled newly or elaborately
                                  arranged to make it look perfect of the
                                  occasion. It can be styled for a friend’s
                                  Birthday, a formal evening party, for
                                  attending different functions, for your own
                                  wedding functions, and even on a daily routine
                                  for your work place. <br />
                                  A Hair stylist can make one feel more
                                  confident, satisfied and stand apart in
                                  crowds.
                                  <br />A Hair Stylist can do Wonders with the
                                  knowledge of Face shapes for giving a perfect
                                  look required.
                                  <strong style={{ fontWeight: "800" }}>
                                    {" "}
                                    IN the Advanced hairstyling course you will
                                    learning many more hairstyles and Advanced
                                    techniques of styling the hair for different
                                    occasions. With the kind of competition in
                                    market, if you are an exclusive hairstylist,
                                    you will always be looked upto … and
                                    overflowed with appointment’s.
                                  </strong>{" "}
                                </p>

                                <br />
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    COURSE CONTENT –
                                  </strong>
                                  <br />
                                </p>
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    - Importance of personal grooming & Hygiene
                                  </strong>
                                  <br />
                                </p>
                                <p>
                                  <strong style={{ fontWeight: "800" }}>
                                    - Knowledge of Hair textures{" "}
                                  </strong>
                                  <br />

                                  <br />
                                  <br />
                                  <strong style={{ fontWeight: "700" }}>
                                    {" "}
                                    - Knowledge of Hair tools and electronic
                                    equipment used in doing Hairstyles
                                  </strong>
                                  <strong style={{ fontWeight: "700" }}>
                                    {" "}
                                    - Styling products
                                  </strong>
                                  <strong style={{ fontWeight: "700" }}>
                                    {" "}
                                    - Hair styles included –
                                  </strong>
                                  <ul style={{ marginLeft: "25px" }}>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - HAIR PRESSING{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - HARD CURLS
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - SOFT CURLS
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - KRIMPING
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - BEACH WAVES
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - SIMPLE & ADVANCED BLOW DRY
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - 4 TYPES OF BRAIDS
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - 2 TYPES OF MESSY BRAID
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - 3 STYLES OF PONYTAILS{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - 3 STYLES OF BUNS{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - 6 STYLES OF BRIDAL BUNS{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - 5 TYPES OF FRONTS ACCORDING TO FACE
                                      SHAPES{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - VINTAGE HAIR LOOK{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - WET LOOK{" "}
                                    </li>
                                    <li style={{ fontWeight: "600" }}>
                                      {" "}
                                      - HAIR ACCESSORIES APPLICATION{" "}
                                    </li>
                                  </ul>
                                  <br />
                                  <ul style={{ marginLeft: "25px" }}>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      T&C{" "}
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      *DEMOS WILL BE CONDUCTED BY ACADEMY
                                      PRODUCT. STUDENTS WILL PRACTICE WITH THEIR
                                      OWN KIT*{" "}
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      * CLASSES WILL BE HELD 3 DAYS A WEEK
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      * CLASS DURATION – 2 HOURS EACHconcealer
                                      application.
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      * 18% GST APPLICABLE ON COURSE FEES .
                                    </li>
                                    <li
                                      style={{
                                        fontWeight: "600",
                                        color: "red",
                                      }}
                                    >
                                      {" "}
                                      * DURATION OF COURSES CANNOT EXCEED
                                      WITHOUT ANY UNAVOIDABLE CIRCUMSTANCES
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6
                          className="accordion-header"
                          id="flush-headingThree"
                          style={{ fontSize: "20px" }}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            <span className="word">
                              3. Advanced Hair Technicican
                            </span>
                            <span className="price">
                              {" "}
                              150,000/- &nbsp; 2.5 Months{props.threeprice}{" "}
                            </span>
                          </button>
                        </h6>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">.__</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6
                          className="accordion-header"
                          id="flush-headingFour"
                          style={{ fontSize: "20px" }}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            <span className="word">
                              4. Advanced Beautician Technician
                            </span>
                            <span className="price">
                              {" "}
                              70,000/- &nbsp; 1.5 Months{props.threeprice}{" "}
                            </span>
                          </button>
                        </h6>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFour"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className="accordion-body">
                              <div className="accordion-body">
                                <div className="accordion-body">
                                  <div className="content ans">
                                    <p>
                                      Beauticians are professionals engaged in
                                      improving a client’s appearance through
                                      hair care, nails, skin care and other
                                      beauty therapies. Beautician can often
                                      specialize in certain areas such as nail
                                      art, makeup application, hair color etc.
                                    </p>
                                    <br />
                                    <p>
                                      The responsibilities of a beautician
                                      involve recommending different beauty
                                      therapies for SKIN CARE/ HAIR CARE etc… A
                                      beautician should be aware of the new
                                      products being introduces in the market …
                                      The ingredients of the products and what
                                      will suit which skin texture … thorough
                                      product knowledge and practical knowledge
                                      is very important for this field.
                                    </p>
                                    <br />
                                    <p>
                                      Different relaxation techniques are
                                      important to understand … It is an art and
                                      those who are thinking of a career in this
                                      profession need to have a good aesthetic
                                      sense.
                                    </p>
                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        COURSE CONTENT :
                                      </strong>
                                    </p>
                                    <ul style={{ marginLeft: "25px" }}>
                                      <li style={{ fontWeight: "600" }}>
                                        Professional Ethics
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Skin Anatomy and Physiology
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Skin Problems
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Different Massage Manipulation
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Nail Structure
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Nail paint application
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Manicure and Pedicure
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Superfluous Temporary Hair Removal
                                        Techniques
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Face and Body Bleaches
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        D-TAN Face and Body
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Client Consultation
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Basic Facials
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Facial Electrotherapy Treatments
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Aromatherapy
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Advance Massage Techniques
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Head massage and Deep conditioning
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Hair Spa’s – complete knowledge with
                                        product knowledge
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Basic Haircuts – straight/ 2 layered/
                                        kids Haircuts (female)
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Root touch ups
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Global hair color
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Manicures
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Pedicures
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        BASIC PARTY MAKEUP TECHNIQUE
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Threading – Upper lips, Eyebrows, Face
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        B-Wax – Lining /Full
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Basic Hairstyling – party and Bridal
                                        Hair styles
                                      </li>
                                      <li style={{ fontWeight: "600" }}>
                                        Professional Draping
                                      </li>
                                    </ul>
                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        Types of Haircuts
                                      </strong>
                                    </p>

                                    <p>
                                      <strong style={{ fontWeight: "800" }}>
                                        Terms &amp; Conditions
                                      </strong>
                                    </p>
                                    <ul style={{ marginLeft: "25px" }}>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *DEMOS WILL BE CONDUCTED BY ACADEMY
                                          PRODUCT. STUDENTS WILL PRACTICE WITH
                                          THEIR OWN KIT*{" "}
                                        </strong>
                                      </li>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *CLASSES WILL BE HELD{" "}
                                        </strong>
                                        <strong style={{ fontWeight: "700" }}>
                                          <u>3 TO 5 DAYS A WEEK</u>
                                        </strong>
                                      </li>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *CLASS DURATION – 2 HOURS EACH
                                        </strong>
                                      </li>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *18% GST APPLICABLE ON COURSE FEES{" "}
                                        </strong>
                                      </li>
                                      <li>
                                        <strong style={{ fontWeight: "700" }}>
                                          *DURATION OF COURSES CANNOT EXCEED
                                          WITHOUT ANY UNAVOIDABLE CIRCUMSTANCES
                                        </strong>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6
                          className="accordion-header"
                          id="flush-headingFive"
                          style={{ fontSize: "20px" }}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive"
                          >
                            <span className="word">
                              5. Advanced Nail Technician
                            </span>
                            <span className="price">
                              {" "}
                              50,000/- &nbsp; 01 Months{props.threeprice}{" "}
                            </span>
                          </button>
                        </h6>
                        <div
                          id="flush-collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFive"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">.__</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6
                          className="accordion-header"
                          id="flush-headingSix"
                          style={{ fontSize: "20px" }}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSix"
                            aria-expanded="false"
                            aria-controls="flush-collapseSix"
                          >
                            <span className="word">
                              6. Hair Extension Course
                            </span>
                            <span className="price">
                              {" "}
                              30,000/- &nbsp; 07 Days{props.threeprice}{" "}
                            </span>
                          </button>
                        </h6>
                        <div
                          id="flush-collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingSix"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">.__</div>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div
                    className="tab-pane fade shadow rounded bg-white p-5"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <h4 className="font-italic mb-4">DIPLOMA COURSE</h4>
                    <p className="font-italic text-muted mb-2">
                      <div className="accordion-item">
                        <h6
                          className="accordion-header"
                          id="flush-headingOne"
                          style={{ fontSize: "20px" }}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            <span className="word">1. Beauty</span>
                            <span className="price">
                              {" "}
                              200,000/- &nbsp; 06 Months{props.threeprice}{" "}
                            </span>
                          </button>
                        </h6>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className="content ans">
                              <p>
                                Diploma in Beauty Culture is a complete package
                                of cosmetology for someone aspiring to open up
                                their own salon. Beauty is not simply a job but
                                it has much deeper significance.
                              </p>
                              <p>
                                &nbsp;This is a career-oriented course. The
                                theoretical and Practical Training imparted to
                                the students helps them in establishing
                                themselves. Course starts with the zero
                                knowledge of beauty culture and converts
                                students into professionals. There are so many
                                career options especially in private sectors
                                after its successful completion.
                              </p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  Diploma in Beauty Culture Syllabus
                                </b>
                              </p>
                              <p>
                                Syllabus of Beauty Culture as prescribed by
                                various Universities and Colleges.
                              </p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  Subjects of Study
                                </b>
                              </p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  &nbsp;
                                  <br />
                                </b>
                                1- Professional Ethics
                                <br />
                                2- Skin Anatomy and Physiology
                                <br />
                                3- Skin textures and Daily care
                                <br />
                                4- Skin Disorders
                                <br />
                                5- Decontamination and Infection Control
                                <br />
                                6- Different Massage Manipulation
                                <br />
                                7- Nail Structure
                                <br />
                                8- Nail Disorder
                                <br />
                                9- Manicure and Pedicure
                                <br />
                                10- Superfluous Temporary Hair Removal
                                Techniques
                                <br />
                                11- Face and Body Bleaches
                                <br />
                                12- D-TAN Face and Body
                                <br />
                                13 Skin Analysis
                                <br />
                                14- Client Consultation
                                <br />
                                15- Basic Facials
                                <br />
                                16- Facial Electrotherapy Treatments
                                <br />
                                17- Aromatherapy
                                <br />
                                18- Advance Massage Techniques
                                <br />
                                19- Head massage and Deep conditioning
                                <br />
                                20- Hair Spa’s – complete knowledge with product
                                knowledge
                                <br />
                                21- Basic Haircuts – straight/ 2 layered/ kids
                                Haircuts (female)
                                <br />
                                22- Root touch ups
                                <br />
                                23- Global hair color
                                <br />
                                24- Advance Manicure &amp; Pedicure
                                <br />
                                25- Advance Facial Treatments
                                <br />
                                26- BASIC COURSE OF NAIL EXTENSIONS + NAIL ART
                                <br />
                                27- Advance Superfluous Hair Removal technique
                                <br />
                                28- Salon Management &amp; Business Ethics
                                <br />
                                29- Cosmetic Brands
                                <br />
                                30- PROFESSIONAL MAKEUP COURSE
                                <br />
                                31- PROFESSIONAL HAIRSTYLING COURSE
                                <br />
                                32- AIRBRUSH MAKEUP TECHNIQUE
                                <br />
                                33- HENNA / MEHENDI ART COURSE
                                <br />
                                34- Threading – Upper lips, Eyebrows, Face
                                <br />
                                35- B-Wax – Lining /Full
                                <br />
                                36- PROFESSIONAL DRAPING
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  PERKS- THIS COURSE INCLUDES 2 MONTHS OF
                                  INTERNSHIP
                                </b>
                              </p>
                              <br />
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  Terms &amp; Conditions
                                </b>
                                <b style={{ fontweight: "800" }}> – </b>
                              </p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  *DEMOS WILL BE CONDUCTED BY ACADEMY PRODUCT.
                                  STUDENTS WILL PRACTICE WITH THEIR OWN KIT*{" "}
                                </b>
                              </p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  *CLASSES WILL BE HELD{" "}
                                </b>
                                <b style={{ fontweight: "800" }}>
                                  <u>3 TO 5 DAYS A WEEK</u>
                                </b>
                              </p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  *CLASS DURATION – 2 HOURS EACH
                                </b>
                              </p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  *18% GST APPLICABLE ON COURSE FEES{" "}
                                </b>
                              </p>
                              <p>
                                <b style={{ fontweight: "800" }}>
                                  *DURATION OF COURSES CANNOT EXCEED WITHOUT ANY
                                  UNAVOIDABLE CIRCUMSTANCES
                                </b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h6
                          className="accordion-header"
                          id="flush-headingTwo"
                          style={{ fontSize: "20px" }}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            <span className="word">2. Hair</span>
                            <span className="price">
                              {" "}
                              200,000/- &nbsp; 06 Months{props.threeprice}{" "}
                            </span>
                          </button>
                        </h6>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className="content ans">
                              <p>
                                Advance certificate course in Hair Technology is
                                a detailed course in Hairdressing to give you
                                the expertise on Hair cuts, Color, Form,
                                Styling, and Treatments. We at TOP KNOT ACADEMY
                                include Hairstyling, Advance course on Hair
                                extensions etc also in this Diploma course.
                              </p>
                              <p>
                                It’s one program for beginners which covers all
                                aspects of hair theory and practice required for
                                Hairdressing professionals to carry out
                                different services and treatments on hair in a
                                safe, professional and competent manner. It is a
                                great learning program for a successful carrier
                                as a Hairdresser.
                              </p>
                              <p>
                                A Good Hair Dresser has no boundaries for
                                excelling and has work all year long.
                              </p>
                              <p>
                                <strong>
                                  &nbsp; <br />
                                </strong>
                              </p>
                              <table width={613}>
                                <tbody>
                                  <tr>
                                    <td width={83}>
                                      <p>
                                        <b style={{ fontWeight: "800" }}>
                                          S.NO.
                                        </b>
                                      </p>
                                    </td>
                                    <td width={530}>
                                      <p>
                                        <b style={{ fontWeight: "800" }}>
                                          SUBJECTS OF STUDY
                                        </b>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>
                                        1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td width={530}>
                                      <p>Professional Ethics</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>
                                        2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td width={530}>
                                      <p>
                                        Hair Science – structure and function
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>
                                        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td width={530}>
                                      <p>
                                        Hair tools and machine knowledge – their
                                        practical use
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>
                                        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td width={530}>
                                      <p>Sterilization of hair equipment</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>
                                        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td width={530}>
                                      <p>
                                        Decontamination and Infection Control
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>
                                        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td width={530}>
                                      <p>Different Massage Manipulation</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>
                                        7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td width={530}>
                                      <p>Types of hair textures</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>8</p>
                                    </td>
                                    <td width={530}>
                                      <p>Hair sectioning</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>9</p>
                                    </td>
                                    <td width={530}>
                                      <p>Cutting tools – knowledge &amp; use</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>10</p>
                                    </td>
                                    <td width={530}>
                                      <p>Hair Degrees</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>11</p>
                                    </td>
                                    <td width={530}>
                                      <p>
                                        BASIC HAIR CUTS&nbsp; [10 CUTS] – MALE
                                        &amp; FEMALE INCLUDED
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>12</p>
                                    </td>
                                    <td width={530}>
                                      <p>
                                        Use of Electronic Equipment related to
                                        Hair Styling
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>13</p>
                                    </td>
                                    <td width={530}>
                                      <p>
                                        ADVANCED HAIR CUTS [ 10 CUTS] -&nbsp;
                                        MALE &amp; FEMALE INCLUDED
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>14</p>
                                    </td>
                                    <td width={530}>
                                      <p>CHEMICAL WORK –</p>
                                      <p>
                                        Hair texture knowledge for chemical work
                                      </p>
                                      <ul style={{ marginLeft: "25px" }}>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Hair chemical product knowledge
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Hair Color Knowledge
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Different Brands associated with Hair
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Root touch ups
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Global Hair color (with/without grey
                                          coverage )
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Fashion shades and their usage
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Pre-lightening of Hair
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Hair Streaks technique
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Global Highlights
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Cap Highlights
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Balayage technique
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Ombre color technique
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Hair smoothening
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Hair rebonding
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Hair Perming
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Advanced Hair Color Techniques
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>15</p>
                                    </td>
                                    <td width={530}>
                                      <p>HAIR TREATMENTS –</p>
                                      <ul style={{ marginLeft: "25px" }}>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Hair Spa
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Keratin Treatment
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Olaplex Treatment
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Deep conditioning
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Scalp Treatments
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Hair fall treatments
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Anti dandruff treatments
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Use of Smart Bond
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          Filler therapy
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>16</p>
                                    </td>
                                    <td
                                      style={{ textAlign: "left" }}
                                      width={530}
                                    >
                                      <p>HAIR EXTENSIONS COURSE –</p>
                                      <ul style={{ marginLeft: "25px" }}>
                                        <li style={{ fontWeight: "700" }}>
                                          HOW TO ASSEMBLE A PROFESSIONAL HAIR
                                          EXTENSIONS KIT
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          TAPE IN EXTENSIONS
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          WEAVE PLACEMENT
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          MICRO-LINK EXTENSIONS
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          FUSION MICRO LINK EXTENSIONS
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          HAIR QUALITY AND SOURCING
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          COLOR MATCHING
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          PREVENTING HAIR DAMAGE /LOSS.
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          PROPER SCALP CARE
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          PRODUCT KNOWLEDGE AND RETAILING
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          TEXTURE MATCHING AND ETHNIC HAIR
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          BUILDING YOUR BUISNESS
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          SOCIAL MEDIA PRESENCE
                                        </li>
                                      </ul>
                                      <p>&nbsp;</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>17</p>
                                    </td>
                                    <td width={530}>
                                      <p>HAIR FILLERS THERAPY</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width={83}>
                                      <p>18</p>
                                    </td>
                                    <td width={530}>
                                      <p>ADVANCED HAIR STYLING COURSE –</p>
                                      <ul style={{ marginLeft: "25px" }}>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          HAIR PRESSING{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          HARD CURLS{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          SOFT CURLS{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          KRIMPING{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          BEACH WAVES{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          SIMPLE &amp; ADVANCED BLOW DRY{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          4 TYPES OF BRAIDS{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          2 TYPES OF MESSY BRAID{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          3 STYLES OF PONYTAILS{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          3 STYLES OF &nbsp;BUNS{" "}
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          {" "}
                                          6 STYLES OF BRIDAL BUNS
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          5 TYPES OF FRONTS
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          VINTAGE HAIR LOOK
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          WET LOOK
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          HAIR ACCESSORIES APPLICATION
                                        </li>
                                        <li style={{ fontWeight: "700" }}>
                                          ASSEMBLING OF REAL FLOWERS IN HAIR
                                          DO’S
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <ol start={19} style={{ marginLeft: "25px" }}>
                                <li style={{ fontWeight: "800" }}>
                                  <strong> PRACTICAL EXAM ON A MODEL </strong>
                                </li>
                                <li style={{ fontWeight: "800" }}>
                                  <strong>
                                    {" "}
                                    CERTIFICATION AND SOCIAL MEDIA PRESENSE TO
                                    PUSH START YOUR CAREER{" "}
                                  </strong>
                                </li>
                              </ol>
                              <p>
                                <b style={{ fontWeight: "800" }}>
                                  Terms &amp; Conditions&nbsp;
                                </b>
                                <b style={{ fontWeight: "800" }}> – </b>
                              </p>
                              <p>
                                <b style={{ fontWeight: "800" }}>
                                  *DEMOS WILL BE CONDUCTED BY ACADEMY PRODUCT.
                                  STUDENTS WILL PRACTICE WITH THEIR OWN KIT*{" "}
                                </b>
                              </p>
                              <p>
                                <b style={{ fontWeight: "800" }}>
                                  *CLASSES WILL BE HELD{" "}
                                </b>
                                <b style={{ fontWeight: "800" }}>
                                  <u>3 DAYS A WEEK (ALTERNATE DAYS)</u>
                                </b>
                              </p>
                              <p>
                                <b style={{ fontWeight: "800" }}>
                                  *CLASS DURATION – 2 HOURS EACH
                                </b>
                              </p>
                              <p>
                                <b style={{ fontWeight: "800" }}>
                                  *18% GST APPLICABLE ON COURSE FEES{" "}
                                </b>
                              </p>
                              <p>
                                <b style={{ fontWeight: "800" }} g>
                                  *DURATION OF COURSES CANNOT EXCEED WITHOUT ANY
                                  UNAVOIDABLE CIRCUMSTANCES
                                </b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Form  */}
      <Form />

      {/* // End #container */}
      <div className="getcall mobile-fixed" style={{display: 'none', zIndex: 999999}}>
  <div className="col-md-6 appoint">
    <a href="/appointment" className="contact-slide-show"><span>Make An Appointment</span></a>
  </div>
  <div className="col-md-6 call"><a href="tel:+919369100400">Call Now</a></div>
</div>

      <Footer />
    </>
  );
}
