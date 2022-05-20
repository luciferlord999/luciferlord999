import React, { useEffect, useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Footer from "../Footer";

import emailjs from "emailjs-com";
import Owl from "../Owl";
import Offer from "./Offer";
import { Link } from "react-router-dom";

function Appointment() {
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
          "service_14rtnp8",
          "template_1fr4xkt",
          form.current,
          "XQUrqE5L5D-H1mCPQ"
        )

        .then(
          setTimeout(navigate("/thankyou"), 5000), (error) => {
            console.log(error.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log("hello navneet");
    }
    e.preventDefault();
    setFormErrors(validate(formValues));

    setIsSubmit(true);
  };
  // Form Validation end

  function sendEmail() {
    console.log("hello");

    // .then(setTimeout(navigate("/thankyou"), 5000), (error) => {
    //   console.log(error.text);
    // });
  }

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

  const form = useRef();
  let navigate = useNavigate();

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_pnf7r7t",
  //       "template_snmxkpz",
  //       form.current,
  //       "user_h6SKeeiATmibi3Z5GSWso"
  //     )

  //     .then(setTimeout(navigate("/thankyou"), 5000), (error) => {
  //       console.log(error.text);
  //     });

  //   e.target.reset();
  // }
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
                  <li>
                    <NavLink activeClassName="active" to="/academy">
                      Academy
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
                    <NavLink activeClassName="active" to="/appointment">
                      Book Appointment{" "}
                    </NavLink>
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
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./images/banner/image/slider1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./images/banner/image/slider.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./images/banner/image/slider2.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
      <div
        className="section-full content-inner overlay-white-middle"
        style={{
          backgroundPosition: "bottom, top",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-fluid ">
          <div
            className="section-head text-black text-center py-5 banner"
            style={{
              backgroundImage:
                "url(https://www.divyanjalimakeupstudio.in/assets/images/background/add-bg.png)",
            }}
          >
            <h2 className="text-primary m-b10" style={{ color: "#6b4c34" }}>
              LATEST SALON OFFER{" "}
            </h2>
            <div className="dlab-separator-outer m-b0">
              <div className="dlab-separator text-primary style-icon">
                <i className="flaticon-spa text-primary" />
              </div>
            </div>

            <div>
              <Offer />
            </div>
          </div>
        </div>
      </div>

      <div className="banner3">
        <div
          className="py-5 banner"
          style={{
            backgroundImage:
              "url(https://www.divyanjalimakeupstudio.in/assets/images/background/add-bg.png)",
          }}
        >
          <div className="row imgup">
            <div className="col-lg-6 col-md-6 m-b30 float shadow">
              <div className="p-a30  clearfix">
                <h4>Book Your Appointment</h4>
                <div className="dzFormMsg" />
                <form ref={form} className="dzForm" onSubmit={handleSubmit}>
                  <input type="hidden" defaultValue="Contact" name="dzToDo" />
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            name="name"
                            type="text"
                            required
                            value={formValues.username}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Name"
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
                            value={formValues.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                            placeholder="Your Email Id"
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
                            value={formValues.phone}
                        onChange={handleChange}
                            maxLength="10"
                            minLength="10"
                          />
                        </div>
                        <p>{formErrors.phone}</p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="form-group">
                          <select
                            name="course"
                            className="form-control"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option value>Select services…</option>
                            <option value="Makeup">Makeup Services</option>
                            <option value="Hair">Hair Services</option>
                            <option value="Beauty">Beauty Services</option>
                            <option value="Facial">Facial Services</option>
                            <option value="Body">Body Services</option>
                            <option value="Nail ">Nail Services</option>
                            <option value="Other ">Other</option>
                          </select>
                        </div>
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
                          <input
                            className="form-control d-none"
                            style={{ display: "none" }}
                            data-recaptcha="true"
                            required
                            data-error="Please complete the Captcha"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        onClick={handleSubmit}
                        value="Submit"
                        className="site-button "
                      >
                        {" "}
                        <span>Submit</span>{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 m-b30">
              <img src="images/banner/image/Book.jpg" alt="..."></img>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-full content-inner"
        style={{
          // backgroundImage: ,
          backgroundPosition: "bottom, top",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          marginTop: "140px",
        }}
      >
        <div className="container-fluid " style={{ marginTop: "260px" }}>
          <div
            className="section-head text-black text-center py-5 banner"
            style={{
              backgroundImage:
                "url(https://www.divyanjalimakeupstudio.in/assets/images/background/add-bg.png)",

              marginTop: "100px",
            }}
          >
            <h3 className="text-primary mt-10" style={{ color: "#6b4c34" }}>
              UPCOMING ACADEMY COURSES{" "}
            </h3>
            <div className="dlab-separator-outer m-b0">
              <div className="dlab-separator text-primary style-icon">
                <i className="flaticon-spa text-primary" />
              </div>
            </div>

            <div style={{ marginTop: "100px" }}>
              <Owl />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row shadow-lg">
          <div className="col-md-6 col-sm-12 res-767-pb-20">
            {/*  section-title */}
            <div className="section-title with-desc clearfix mt-20">
              <div className="title-header">
                <h3
                  className="ttm-textcolor-skincolor"
                  style={{ color: "rgb(107, 76, 52)", marginTop: "25px" }}
                >
                  Contact Us
                </h3>
              </div>
              <div className="title-desc">
                <p>
                  We offer you with best makeup services, transforming your look
                  and making surethat you are looking stunningly pretty on your
                  wedding day and throughout the nuptial ceremonies.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-g-4 text-center">
                  <a
                    href="/contact"
                    className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "20px",
                    }}
                  >
                    <button
                      className="site-button "
                      style={{ margin: "23px 12px" }}
                    >
                      {" "}
                      <span>CONTACT US</span>{" "}
                    </button>
                  </a>
                </div>
                <div className="col-g-4 text-center">
                  <a
                    href="tel:+919794558476"
                    className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "20px",
                    }}
                  >
                    <button
                      className="site-button "
                      style={{ margin: "23px 12px" }}
                    >
                      {" "}
                      <span>CALL US</span>{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* section-title end */}
          </div>
          <div className="col-md-6 col-sm-7 mt-20 res-991-mt-60 res-767-mt-0">
            <img
              src="/images/banner/image/booknow.jpg"
              className="img-fluid"
              alt="single-image"
            />
          </div>
        </div>
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
          <a href="tel:+919369103020">Call Now</a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Appointment;
