import React from "react";
import About from "./Pages/About";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <div>
      
        <footer className="site-footer">
          <div
            className="footer-top overlay-black-dark"
            style={{ backgroundImage: "url(images/background/bg1.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xl-5 col-lg-4 col-sm-8 footer-col-4">
                  <div className="widget">
                    <img src={require("./logo.png")} alt="" width={150} />
                    <img
                      src={require("./logoa.png")}
                      alt=""
                      width={150}
                      className=" logoa"
                    />
                    <p className="text-capitalize m-b20">
                      Where we want to make you feel beautiful from the inside
                      out. Thats our motto! We are centrally located in the
                      gorgeous little city, Lucknow
                    </p>

                    <ul className="list-inline m-a0">
                      <li>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/"
                          className="site-button facebook circle "
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      
                      <li>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/"
                          className="site-button instagram circle "
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=+919794558476"
                          className="site-button twitter circle "
                        >
                          <i className="fa fa-whatsapp" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-4 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b20" style={{ color: "rgb(153 113 8)" }}>
                      Company
                    </h5>
                    <ul>
                      <li>
                        <a href="/">Home </a>
                      </li>
                      <li>
                        <NavLink to="/about">About Us </NavLink>
                      </li>
                      <li>
                        <NavLink to="/academy">Academy</NavLink>
                      </li>

                      <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-4 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b20" style={{ color: "rgb(153 113 8)" }}>
                      Academy
                    </h5>
                    <ul>
                      <li>
                        <a href="/academy"> Beauty Culture</a>
                      </li>
                      <li>
                        <a href="/academy">Make Course </a>
                      </li>
                      <li>
                        <a href="/academy">Crash Course</a>
                      </li>

                     
                    </ul>
                  </div>
                </div>

                <div className="col-md-6 col-xl-3 col-lg-3 col-sm-6 footer-col-4 mx-10">
                  <div className="widget widget_getintuch">
                    <h5 className="m-b30  " style={{ color: "rgb(153 113 8)" }}>
                      Contact us
                    </h5>
                    <ul style={{ marginLeft: "-42px" }}>
                      <li>
                        <i className="ti-location-pin" />
                        <strong>THE TOP KNOT MAKEUP ACADEMY</strong> B-1 , 1/58
                        Vijay Khand, 2, Lohia Park Rd, opp. Gate no. 2, Gomti
                        Nagar, Lucknow, Uttar Pradesh 226010.{" "}
                      </li>
                      <li>
                        <i className="ti-mobile" />
                        <strong>phone</strong>+91 9794558476
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer bottom part */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 text-center text-md-left">
                  {" "}
                  <span>
                    Copyright © 2022 The Top Knot All rights reserved Developed
                    by
                    <a
                      href="https://www.digitalnawab.com/"
                      className="dzlink"
                      target="_blank"
                    >
                      <b style={{ color: "rgb(157 114 0)" }}> Digital Nawab</b>
                    </a>
                  </span>{" "}
                </div>
                <div className="col-md-6 col-sm-6 text-right ">
                  <div className="widget-link ">
                    <ul>
                      <li>
                        <NavLink to="/about"> About</NavLink>
                      </li>
                      
                      <li>
                        <a href="/"> Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Footer END*/}
        <button className="scroltop fa fa-chevron-up" />
      </div>
    </>
  );
}
