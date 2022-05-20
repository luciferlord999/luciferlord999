import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { useStateValue } from "./stateProvider/stateProvider";
import { actionType } from "./Context/reducer";

function ServiceNavbar() {
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

  // add to cart data show

  
  return (
    <>
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
                    <a
                      ClassName="active"
                      style={{ color: "rgb(239 192 67) " }}
                      href="https://thetopknot.in/"
                    >
                      Home
                    </a>
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

                  <li>
                    <a activeClassName="active" href="/appointment">
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
    </>
  );
}

export default ServiceNavbar;
