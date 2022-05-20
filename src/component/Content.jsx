import React, { useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import ReactDOM from "react-dom";

// import topknot from "../Asset/image/topknot-bg.jpg";
import blackglod from "../Asset/image/whiteglod.png";
import bgw from "../Asset/image/bgW.jpg";
import emailjs from "emailjs-com";

import hair from "../Asset/hair.jpg";
import beauty from "../Asset/beauty.jpg";
import makeup from "../Asset/makeup.jpg";
import nails from "../Asset/nails.jpg";
import Card from "./Card";

import inst1 from "../Asset/insta/1.png";
import inst2 from "../Asset/insta/2.png";
import inst3 from "../Asset/insta/3.png";
import inst4 from "../Asset/insta/4.png";
import inst5 from "../Asset/insta/5.png";
import inst6 from "../Asset/insta/6.png";
import inst7 from "../Asset/insta/7.png";
import inst8 from "../Asset/insta/8.png";
import inst9 from "../Asset/insta/9.png";
import inst10 from "../Asset/insta/10.png";
import inst11 from "../Asset/insta/11.png";
import inst12 from "../Asset/insta/12.png";
import inst13 from "../Asset/insta/13.png";
import inst14 from "../Asset/insta/14.png";
import inst15 from "../Asset/insta/15.png";
import black1 from "../Asset/test.png";

import aboutImg from "./Pages/shama.jpg";
import Owl from "./Owl";
import Offer from './Pages/Offer'

export default function Content(props) {
  const form = useRef();
  let navigate = useNavigate();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pnf7r7t",
        "template_snmxkpz",
        form.current,
        "user_h6SKeeiATmibi3Z5GSWso"
      )

      .then(setTimeout(navigate("/thankyou"), 5000), (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }
  return (
    <>
      <div className="page-content bg-white">
        {/* Main Slider */}

        {/* Main Slider */}
        {/* About Us */}

        <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${bgw})`,
            backgroundPosition: "bottom, top",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="section-head text-black text-center">
            <br />

            <h2 className="m-b10" style={{ color: "#6b4c34" }}>
              OUR STORY
            </h2>

            {/* <h5 className="m-b10">WE ARE THE BEST UNISEX SALON IN LUCKNOW</h5> */}
            <div className="dlab-separator-outer m-b0">
              <div className="dlab-separator text-primary style-icon">
                <i className="flaticon-spa text-primary" />
              </div>
            </div>
            <section className="ftco-section ftco-no-pb">
              <div className="container">
                <div className="row d-flex">
                  <div
                    className="col-md-3 order-md-right
    wrap-about align-items-stretch  "
                  >
                    <div className="wrap-about-border ">
                      <div className="img" />
                      <img src="/images/sneha.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-7 wrap-about pr-md-4    ">
                    <h6 className="our" style={{ textAlign: "justify" }}>
                      ENTREPRENEURSHIP WAS ONCE CONSIDERED A MAN’S DOMAIN, BUT
                      THE TIDE HAS SHIFTED.
                    </h6>
                    <p
                      data-aos="zoom-out"
                      data-aos-duration={1000}
                      data-aos-offset={100}
                      className="aos-init"
                      style={{ textAlign: "justify" }}
                    >
                      The new generation women across the world have overcome
                      all negative notions and have proved themselves without
                      doubt in all spheres of life.
                      <b>
                        {" "}
                        Mrs. Shama Vig & Mrs. Sneha Charan Co Founders &
                        Directors of The Topknot Salon{" "}
                      </b>{" "}
                      is one such lady who have broken all odds in one of the
                      most conservative cities in India , Lucknow, to create a
                      niche for themselves in the field of personal grooming and
                      beauty services
                    </p>
                    <div className="text-center mb-3">
                      <a
                        href="https://nowlucknow.com/head-to-the-top-knot-by-sneha-charan-for-the-most-luxurious-salon-experience-in-lucknow/"
                        className="site-button outline"
                      >
                        Know More About salon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* About Us End */}

        {/* our service */}
        <div className="content-block">
          <div className="section-full content-inner-2 bg-white hair-services">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2
                  className="text-primary m-b10 "
                  style={{ color: "#6b4c34" }}
                >
                  {" "}
                  OUR SERVICE
                </h2>
                <div className="dlab-separator-outer m-b0">
                  <div className="dlab-separator text-primary style-icon">
                    <i className="flaticon-spa text-primary" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 p-lr0 shadow-sm p-3 mb-5 bg-white  rounded">
                  <div className="icon-bx-wraper center p-a30 ">
                    <div className="dlab-post-media dlab-img-effect radius-sm">
                      {" "}
                      <a href="/">
                        <img src="images/services/hair.jpg" alt />
                      </a>{" "}
                    </div>

                    <div className="icon-lg radius m-b20"></div>
                    <div className="icon-content">
                      <h5 className="dez-tilte">
                        <a href="/" style={{ color: "rgb(107, 76, 52)" }}>
                          HAIRCUT &amp; STYLING
                        </a>
                      </h5>
                      <p>
                        Professional hair stylist analyzes scalp conditions to
                        determine th type of treatment need.
                      </p>

                      <div class="ttm-border-seperator"></div>
                      <div class="dlab-post-readmore blog-share">
                        <a
                          href="/"
                          title="READ MORE"
                          rel="bookmark"
                          class="site-button-link border-link black"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 p-lr0 shadow-sm p-3 mb-5 bg-white  rounded">
                  <div className="icon-bx-wraper center p-a30 ">
                    <div className="dlab-post-media dlab-img-effect radius-sm">
                      {" "}
                      <a href="/">
                        <img
                          style={{ width: "640", height: "427" }}
                          src="images/services/makeup.jpg"
                          alt
                        />
                      </a>{" "}
                    </div>

                    <div className="icon-lg radius m-b20"></div>
                    <div className="icon-content">
                      <h5 className="dez-tilte">
                        <a href="/" style={{ color: "rgb(107, 76, 52)" }}>
                          MAKE UP
                        </a>
                      </h5>
                      <p>
                        As we all know that every woman wants to look beautiful
                        as well as deserve the Red Carpet Look once in the
                        lifetime.
                      </p>

                      <div class="ttm-border-seperator"></div>
                      <div class="dlab-post-readmore blog-share">
                        <a
                          href="/"
                          title="READ MORE"
                          rel="bookmark"
                          class="site-button-link border-link black"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 p-lr0 shadow-sm p-3 mb-5 bg-white  rounded">
                  <div className="icon-bx-wraper center p-a30 ">
                    <div className="dlab-post-media dlab-img-effect radius-sm">
                      {" "}
                      <a href="/">
                        <img src="images/services/nails.jpg" alt />
                      </a>{" "}
                    </div>

                    <div className="icon-lg radius m-b20"></div>
                    <div className="icon-content">
                      <h5 className="dez-tilte">
                        <a href="/" style={{ color: "rgb(107, 76, 52)" }}>
                          NAIL
                        </a>
                      </h5>
                      <p>
                        You may able to get the perfect professionals in hair
                        cutting, hair coloring as well as styling hair in order.
                      </p>

                      <div class="ttm-border-seperator"></div>
                      <div class="dlab-post-readmore blog-share">
                        <a
                          href="/"
                          title="READ MORE"
                          rel="bookmark"
                          class="site-button-link border-link black"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Chose Us */}

        <div
          className="section-full content-inner-2 spa-our-portfolio"
          style={{
            backgroundImage: "url(images/background/bg9.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="section-head text-black text-center">
              <h2 className="m-b10" style={{ color: "#6b4c34" }}>
                OUR GALLERY
              </h2>
              <div className="dlab-separator-outer m-b0">
                <div className="dlab-separator text-primary style-icon">
                  <i className="flaticon-spa text-primary" />
                </div>
              </div>
            </div>

            <div className="clearfix">
              <ul
                id="masonry"
                className="row sp15 portfolio-box dlab-gallery-listing gallery-grid-4 gallery lightgallery "
              >
                <li className="aroma card-container col-lg-3 col-md-6 col-sm-6 m-b15">
                  <div className="dlab-box ">
                    <div className="dlab-media  ">
                      <a>
                        <img
                          src="images/gallery/bridal/the-top-knot1.jpg"
                          alt=""
                        />
                      </a>
                      <div className="overlay-bx">
                        <div className="spa-port-bx">
                          <div>
                            <span
                              data-exthumbimage="images/gallery/bridal/the-top-knot1.jpg"
                              data-src="images/gallery/bridal/the-top-knot1.jpg"
                              className="check-km"
                              title="Bridal Gallery image 1"
                            >
                              <i className="ti-fullscreen" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="massage image-4 card-container col-lg-3 col-md-6 col-sm-6 m-b15">
                  <div className="dlab-box">
                    <div className="dlab-media">
                      <img
                        src="images/gallery/bridal/the-top-knot10.jpg"
                        alt=""
                      />
                      <div className="overlay-bx">
                        <div className="spa-port-bx">
                          <div>
                            <span
                              data-exthumbimage="images/gallery/bridal/the-top-knot10.jpg"
                              data-src="images/gallery/bridal/the-top-knot10.jpg"
                              className="check-km"
                              title="Bridal Gallery image 2"
                            >
                              <i className="ti-fullscreen" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="massage image-4 card-container col-lg-3 col-md-6 col-sm-6 m-b15">
                  <div className="dlab-box">
                    <div className="dlab-media">
                      <img
                        src="images/gallery/bridal/the-top-knot2.jpg"
                        alt=""
                      />
                      <div className="overlay-bx">
                        <div className="spa-port-bx">
                          <div>
                            <span
                              data-exthumbimage="images/gallery/bridal/the-top-knot2.jpg"
                              data-src="images/gallery/bridal/the-top-knot2.jpg"
                              className="check-km"
                              title="Bridal Gallery image 3"
                            >
                              <i className="ti-fullscreen" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="salt-aroma image-4 card-container col-lg-3 col-md-6 col-sm-6 m-b15">
                  <div className="dlab-box">
                    <div className="dlab-media">
                      <img
                        src="images/gallery/bridal/the-top-knot9.jpg"
                        alt=""
                      />
                      <div className="overlay-bx">
                        <div className="spa-port-bx">
                          <div>
                            <span
                              data-exthumbimage="images/gallery/bridal/the-top-knot9.jpg"
                              data-src="images/gallery/bridal/the-top-knot9.jpg"
                              className="check-km"
                              title="Bridal Gallery image 4"
                            >
                              <i className="ti-fullscreen" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="aroma card-container col-lg-3 col-md-6 col-sm-6 m-b15">
                  <div className="dlab-box">
                    <div className="dlab-media">
                      <img
                        src="images/gallery/bridal/the-top-knot11.jpg"
                        alt=""
                      />
                      <div className="overlay-bx">
                        <div className="spa-port-bx">
                          <div>
                            <span
                              data-exthumbimage="images/gallery/bridal/the-top-knot11.jpg"
                              data-src="images/gallery/bridal/the-top-knot11.jpg"
                              className="check-km"
                              title="Bridal Gallery image 5"
                            >
                              <i className="ti-fullscreen" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="massage image-4 card-container col-lg-3 col-md-6 col-sm-6 m-b15">
                  <div className="dlab-box">
                    <div className="dlab-media">
                      <img
                        src="images/gallery/bridal/the-top-knot12.jpg"
                        alt=""
                      />
                      <div className="overlay-bx">
                        <div className="spa-port-bx">
                          <div>
                            <span
                              data-exthumbimage="images/gallery/bridal/the-top-knot12.jpg"
                              data-src="images/gallery/bridal/the-top-knot12.jpg"
                              className="check-km"
                              title="Bridal Gallery image 6"
                            >
                              <i className="ti-fullscreen" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="aroma image-4 card-container col-lg-3 col-md-6 col-sm-6 m-b15">
                  <div className="dlab-box">
                    <div className="dlab-media">
                      <img
                        src="images/gallery/bridal/the-top-knot3.jpg"
                        alt=""
                      />
                      <div className="overlay-bx">
                        <div className="spa-port-bx">
                          <div>
                            <span
                              data-exthumbimage="images/gallery/bridal/the-top-knot3.jpg"
                              data-src="images/gallery/bridal/the-top-knot3.jpg"
                              className="check-km"
                              title="Bridal Gallery image 7"
                            >
                              <i className="ti-fullscreen" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="salt-aroma image-4 card-container col-lg-3 col-md-6 col-sm-6 m-b15">
                  <div className="dlab-box">
                    <div className="dlab-media">
                      <img
                        src="images/gallery/bridal/the-top-knot4.jpg"
                        alt=""
                      />
                      <div className="overlay-bx">
                        <div className="spa-port-bx">
                          <div>
                            <span
                              data-exthumbimage="images/gallery/bridal/thumb/the-top-knot4.jpg"
                              data-src="images/gallery/bridal/the-top-knot4.jpg"
                              className="check-km"
                              title="Bridal Gallery image 8"
                            >
                              <i className="ti-fullscreen" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Chose Us End */}

        {/* offer start */}
        <div
          className="section-full content-inner overlay-white-middle"
          style={{
            backgroundPosition: "bottom, top",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container-fluid">
            <div className="section-head text-black text-center">
              <h2 className="text-primary m-b10" style={{ color: "#6b4c34" }}>
                LATEST SALON OFFER{" "}
              </h2>
              <div className="dlab-separator-outer m-b0">
                <div className="dlab-separator text-primary style-icon">
                  <i className="flaticon-spa text-primary" />
                </div>
              </div>
            </div>
            <Offer />

          </div>
        </div>

        {/* {offfer end} */}

        {/* salon Offer */}

        <div
          className="section-full content-inner overlay-white-middle"
          style={{
            // backgroundImage: ,
            backgroundPosition: "bottom, top",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container-fluid">
            <div className="section-head text-black text-center">
              <h3 className="text-primary m-b10" style={{ color: "#6b4c34" }}>
                UPCOMING ACADEMY COURSES{" "}
              </h3>
              <div className="dlab-separator-outer m-b0">
                <div className="dlab-separator text-primary style-icon">
                  <i className="flaticon-spa text-primary" />
                </div>
              </div>
            </div>

            <Owl />
          </div>
        </div>

        {/* salon End */}

        <div className="content-block">
          <div className="section-full content-inner-2 bg-white hair-services">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2
                  className="text-primary m-b10 "
                  style={{ color: "#6b4c34" }}
                >
                  {" "}
                  BOOK APPOINTMENT
                </h2>
                <div className="dlab-separator-outer m-b0">
                  <div className="dlab-separator text-primary style-icon">
                    <i className="flaticon-spa text-primary" />
                  </div>
                </div>
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
                <div className="p-a30 bg-gray clearfix">
                  <h4>Book Your Appointment</h4>
                  <div className="dzFormMsg" />
                  <form ref={form} className="dzForm" onSubmit={sendEmail}>
                    <input type="hidden" defaultValue="Contact" name="dzToDo" />
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="name"
                              type="text"
                              required
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
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
                            />
                          </div>
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
                              maxLength="10"
                              minLength="10"
                            />
                          </div>
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
                              name="dzMessage"
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
                          onClick={sendEmail}
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

        {/* Our Professional Team */}

        <div
          className="section-full content-inner-2 overlay-white-middle "
          style={{
            backgroundImage: `url(${blackglod})`,
            backgroundPosition: "bottom, top",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            marginTop: "330px",
          }}
        >
          <div className="container mt-10">
            <div className="section-head text-black text-center">
              <h2 className="m-b10" style={{ color: "#6b4c34" }}>
                PARTNER BRANDS
              </h2>
              <div className="dlab-separator-outer m-b0">
                <div className="dlab-separator text-primary style-icon">
                  <i className="flaticon-spa text-primary" />
                </div>
              </div>
            </div>
            <div className="team-carousel owl-carousel owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-dots-primary-full owl-loaded owl-drag">
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst1} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst2} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst3} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst4} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst5} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst6} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst7} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst8} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst7} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst9} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst10} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst11} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst12} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst13} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst14} alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="dlab-box text-center team-box">
                  <div className="dlab-media">
                    <img width={300} height={300} src={inst15} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Professional Team End */}

        {/* testimonial start */}
        <div
          className="section-full content-inner-2"
          style={{
            backgroundImage: `url(${black1})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="section-head text-black text-center">
              <h2 className="text-primary m-b10" style={{ paddingTop: "15px" }}>
                TESTIMONIALS{" "}
              </h2>
              <div className="dlab-separator-outer m-b0">
                <div className="dlab-separator text-primary style-icon">
                  <i className="flaticon-spa text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-two-dots owl-carousel owl-theme owl-dots-primary-full owl-btn-center-lr owl-btn-3">
              <div className="item p-a5">
                <div className="testimonial-9">
                  <div className="testimonial-pic radius style1">
                    <img
                      src="images/testimonials/pic1.jpg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Love this place for the best makeup always. You cannot go
                      wrong when it comes to getting that perfect look for any
                      big or small occasion.{" "}
                    </p>
                  </div>
                  <div className="testimonial-detail">
                    {" "}
                    <strong className="testimonial-name">Atmika</strong>{" "}
                  </div>
                </div>
              </div>
              <div className="item p-a5">
                <div className="testimonial-9">
                  <div className="testimonial-pic radius style1">
                    <img
                      src="images/testimonials/pic2.jpg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Got my hair color and styling done from Shahnawaz. Loved
                      the look. Anyone who's looking for great styling or a
                      change in thier look should visit them.
                    </p>
                  </div>
                  <div className="testimonial-detail">
                    {" "}
                    <strong className="testimonial-name">Ishika</strong>{" "}
                  </div>
                </div>
              </div>

              <div className="item p-a5">
                <div className="testimonial-9">
                  <div className="testimonial-pic radius style1">
                    <img
                      src="images/testimonials/pic3.jpg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="testimonial-text">
                    <p>
                      I had an amazing experience in Topknot. I choose it for my
                      bridal makeup and I got the best service. Monika did my
                      makeup and skills across all the branches.
                    </p>
                  </div>
                  <div className="testimonial-detail">
                    {" "}
                    <strong className="testimonial-name">Zara</strong>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial end */}

        {/* Our Portfolio */}

        {/* Our Portfolio END */}
        {/* Our Portfolio */}

        {/* contact area END */}
      </div>
      <div className="getcall mobile-fixed" style={{ display: 'none', zIndex: 999999 }}>
        <div className="col-md-6 appoint">
          <a href="/appointment" className="contact-slide-show"><span>Make An Appointment</span></a>
        </div>
        <div className="col-md-6 call"><a href="tel:+919794558476">Call Now</a></div>
      </div>

    </>
  );
}
