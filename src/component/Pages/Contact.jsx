import React, { useEffect, useRef, useState } from "react";

import Footer from "../Footer";
import { NavLink, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import one from "../2.jpg";
import Accordion from "../Accordion";
import "../Header.css";
// import {config, set, event, action} from '@deptno/gtag'
import { GTag } from "@deptno/gtag-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const form = useRef();

  // Form Validation start

  const initialValues = { name: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phregex = /^[0-9]{10}$/;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (!phregex.test(values.phone)) {
      errors.phone = "Enter 10 Digit Phone Number  ";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "service_pnf7r7t",
          "template_9mcl7uu",
          form.current,
          "user_h6SKeeiATmibi3Z5GSWso"
        )
        .then(
          (result) => {
            console.log(result.text);

            result.setTimeout(navigate("/thankyou"), 5000);

            let url = "https://www.thetopknot.in/thankyou";
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof url != "undefined") {
                  window.location = url;
                }
              };
              GTag("event", "conversion", {
                send_to: "AW-10851482502/IEY2CKzLrqcDEIb3sbYo",
                event_callback: callback,
              });
              return false;
            }
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    }
    e.preventDefault();
    setFormErrors(validate(formValues));

    setIsSubmit(true);
  };

  function hd(event) {
    return event.charCode >= 48 && event.charCode <= 57;
  }

  let navigate = useNavigate();

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
                    <i className="fa fa-phone m-r5" /> +919794558476
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
              {/* <div className="logo-header1 mostion">
                <NavLink to="/academy" className="dez-page">
                  <img src={require("../logoa.png")} alt="" />
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
        <div
          className="dlab-bnr-inr dlab-bnr-inr overlay-primary bg-pt"
          style={{ backgroundImage: "url(/images/headertop.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Contact Us</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>
        {/* inner page banner END */}
        {/* contact area */}
        <div className="section-full content-inner bg-white contact-style-1">
          <div className="container-fluid">
            <div className="row conta">
              {/* right part start */}

              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="contact-block">
                  <div className="dart-headingstyle-one dart-mb-20">
                    {" "}
                    {/*Style 1*/}
                    <h2
                      className="dart-heading text-center color"
                      style={{ marginTop: "22px", fontSize: "50px" }}
                    >
                      Lucknow{" "}
                    </h2>
                    <h5 className="dart-heading">GOMTI NAGAR BRANCH</h5>
                  </div>
                  <div
                    className="contact-info"
                    style={{
                      paddingLeft: "21px",
                      position: "relative",
                      margin: "0 0 20px",
                    }}
                  >
                    <div className="col-md-12 col-sm-12 my-3">
                      <p
                        className="addre"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-map-marker" />{" "}
                        <strong style={{ fontWeight: "600" }}>
                          {" "}
                          1/58, Vijay Khand, Opp. Lohia Gate no. 2, Gomti Nagar,
                          <br />
                          Lucknow 226010
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="phone-call"
                        style={{ lineHeight: "24px", marginBottom: "24px" }}
                      >
                        <i className="fa fa-phone" />{" "}
                        <a href="tel:0522-4026655">
                          {" "}
                          <strong style={{ fontWeight: "600" }}>
                            0522- 4026655
                          </strong>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="mail-id"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-envelope" />

                        <strong style={{ fontWeight: "600" }}>
                          &nbsp;contact@thetopknot.in
                        </strong>
                      </p>

                      <br />
                    </div>
                  </div>
                  <hr />
                  <h5 className="dart-heading">GOKHLE MARG BRANCH</h5>

                  <div
                    className="contact-info"
                    style={{
                      paddingLeft: "21px",
                      position: "relative",
                      margin: "0 0 20px",
                    }}
                  >
                    <div className="col-md-12 col-sm-12 my-3">
                      <p
                        className="addre"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-map-marker" />{" "}
                        <strong style={{ fontWeight: "600" }}>
                          {" "}
                          31 gokhle marg Opposite IFFCO office
                          <br />
                          Lucknow – 226007
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="phone-call"
                        style={{ lineHeight: "24px", marginBottom: "24px" }}
                      >
                        <i className="fa fa-phone" />{" "}
                        <a href="tel:+919369103020">
                          {" "}
                          <strong style={{ fontWeight: "600" }}>
                            {" "}
                            91-9369103020 , 0522-3576171
                          </strong>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="mail-id"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-envelope" />

                        <strong style={{ fontWeight: "600" }}>
                          &nbsp;contact@thetopknot.in
                        </strong>
                      </p>

                      <br />
                    </div>
                  </div>
                  {/* end unisex salon */}
                  <hr />
                  <h5>THE TOP KNOT SALON </h5>

                  <div
                    className="contact-info"
                    style={{
                      paddingLeft: "21px",
                      position: "relative",
                      margin: "0 0 20px",
                    }}
                  >
                    <div className="col-md-12 col-sm-12 my-3">
                      <p
                        className="addre"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-map-marker" />{" "}
                        <strong style={{ fontWeight: "600" }}>
                          {" "}
                          B40, Mandir Marg , Mahanagar Opp House of Johnson
                          <br />
                          ,Lucknow 226008
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="phone-call"
                        style={{ lineHeight: "24px", marginBottom: "24px" }}
                      >
                        <i className="fa fa-phone" />{" "}
                        <a href="tel:+919369103020">
                          {" "}
                          <strong style={{ fontWeight: "600" }}>
                            {" "}
                            0522-4067605
                          </strong>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="mail-id"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-envelope" />

                        <strong style={{ fontWeight: "600" }}>
                          &nbsp;contact@thetopknot.in
                        </strong>
                      </p>

                      <br />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="dart-headingstyle-one mt-20 dart-mb-20">
                  {" "}
                  {/*Style 1*/}
                  <h5 className="dart-heading ">
                    THE TOP KNOT MAKEUP ACADEMY{" "}
                  </h5>
                  <div
                    className="contact-info"
                    style={{
                      paddingLeft: "21px",
                      position: "relative",
                      margin: "0 0 20px",
                    }}
                  >
                    <div className="col-md-12 col-sm-12 my-3">
                      <p
                        className="addre"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-map-marker" />{" "}
                        <strong style={{ fontWeight: "600" }}>
                          {" "}
                          1/58, Vijay Khand, Opp. Lohia Gate no. 2, Gomti Nagar,
                          <br />
                          Lucknow 226010
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="phone-call"
                        style={{ lineHeight: "24px", marginBottom: "24px" }}
                      >
                        <i className="fa fa-phone" />{" "}
                        <a href="tel:+919369100400">
                          {" "}
                          <strong style={{ fontWeight: "600" }}>
                            +91 936-910-0400 , 0522-4242338
                          </strong>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="mail-id"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-envelope" />

                        <strong style={{ fontWeight: "600" }}>
                          &nbsp;contact@thetopknot.in
                        </strong>
                      </p>

                      <br />
                    </div>
                    <hr />
                    <div className="col-lg-8 col-md-10 d-flex m-b30">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14285.167449855471!2d80.315443!3d26.478546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa45cdfdd9e778a55!2sThe%20Top%20Knot%20by%20Sneha%20Charan%20l%20Makeup%20artist%20in%20kanpur!5e0!3m2!1sen!2sin!4v1644843262366!5m2!1sen!2sin"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/*- unisex salon */}
                <br />
              </div>
              <div className=" col-md-6  col-sm-6 col-xs-12">
                <div className="contact-block">
                  <div className="dart-headingstyle-one dart-mb-20">
                    {" "}
                    {/*Style 1*/}
                    <h2
                      className="dart-heading text-center color"
                      style={{ marginTop: "22px", fontSize: "50px" }}
                    >
                      Kanpur{" "}
                    </h2>
                    <h5 className="dart-heading">SWAROOP NAGAR BRANCH </h5>
                  </div>
                  <div
                    className="contact-info"
                    style={{
                      paddingLeft: "21px",
                      position: "relative",
                      margin: "0 0 20px",
                    }}
                  >
                    <div className="col-md-12 col-sm-12 my-3">
                      <p
                        className="addre"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-map-marker" />{" "}
                        <strong style={{ fontWeight: "600" }}>
                          {" "}
                          113/57-A, Swaroop Nagar (Oppt Motijheel),
                          <br />
                          Kanpur 208011
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="phone-call"
                        style={{ lineHeight: "24px", marginBottom: "24px" }}
                      >
                        <i className="fa fa-phone" />{" "}
                        <a href="tel:+919721112288">
                          {" "}
                          <strong style={{ fontWeight: "600" }}>
                            +919305627271
                          </strong>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="mail-id"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-envelope" />

                        <strong style={{ fontWeight: "600" }}>
                          &nbsp;contact@thetopknot.in
                        </strong>
                      </p>

                      <br />
                    </div>
                  </div>
                  <hr />
                  <h5>KIDWAI NAGAR BRANCH</h5>
                  <div
                    className="contact-info"
                    style={{
                      paddingLeft: "21px",
                      position: "relative",
                      margin: "0 0 20px",
                    }}
                  >
                    <div className="col-md-12 col-sm-12 my-3">
                      <p
                        className="addre"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-map-marker" />{" "}
                        <strong style={{ fontWeight: "600" }}>
                          {" "}
                          G- Block , Near Sotte Wala Hanuman Mandir , Kidwai
                          Nagar
                          <br />
                          Kanpur.
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="phone-call"
                        style={{ lineHeight: "24px", marginBottom: "24px" }}
                      >
                        <i className="fa fa-phone" />{" "}
                        <a href="tel:+91 97211 16633">
                          {" "}
                          <strong style={{ fontWeight: "600" }}>
                            +9197211 16633, 0512-3590511
                          </strong>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <p
                        className="mail-id"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        <i className="fa fa-envelope" />

                        <strong style={{ fontWeight: "600" }}>
                          &nbsp;contact@thetopknot.in
                        </strong>
                      </p>

                      <br />
                      <hr />
                      <h2 className="dart-heading">Contact Us</h2>
                    </div>
                    <form ref={form} className="dzForm" onSubmit={handleSubmit}>
                      <input
                        type="hidden"
                        defaultValue="Contact"
                        name="dzToDo"
                      />
                      <div className="row imgup">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="name"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Your Name"
                                value={formValues.username}
                                onChange={handleChange}

                                //  ref={register({required:"Username is Required"})}
                              />
                            </div>
                            <p>{formErrors.name}</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="email"
                                type="email"
                                className="form-control"
                                required
                                placeholder="Your Email Id"
                                // ref={register({required:"Email Id is Required"})}
                                value={formValues.email}
                                onChange={handleChange}
                              />
                            </div>
                            <p>{formErrors.email}</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="phone"
                                type="tel"
                                className="form-control"
                                required
                                placeholder="Your Contact No"
                                maxlength="10"
                                minlength="10"
                                value={formValues.phone}
                                onChange={handleChange}
                                // ref={register({required:"Contact No Is Required"})}
                              />
                            </div>
                            <p>{formErrors.phone}</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <textarea
                                name="message"
                                rows={4}
                                className="form-control"
                                required
                                placeholder="Your Message..."
                                defaultValue={""}
                                // ref={register}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <div
                                className="g-recaptcha"
                                data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                data-callback="verifyRecaptchaCallback"
                                data-expired-callback="expiredRecaptchaCallback"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 mb-5"
                          style={{ marginLeft: "26px" }}
                        >
                          <button
                            name="submit"
                            type="submit"
                            className="site-button "
                            style={{ marginleft: "-17px" }}
                            // onClick={sendEmail}
                            onSubmit={handleSubmit}
                          >
                            {" "}
                            <span>Submit</span>{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* right part END */}
              {/* Left part start */}

              {/* // End form */}

              {/* Left part END */}
            </div>
          </div>
        </div>
        {/* contact area  END */}
      </div>
      <div
        className="getcall mobile-fixed"
        style={{ display: "none", zIndex: 999999 }}
      >
        <div className="col-md-6 appoint">
          <a href="/appointment" className="contact-slide-show">
            <span>Make An Appointment</span>
          </a>
        </div>
        <div className="col-md-6 call">
          <a href="tel:+919794558476">Call Now</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
