import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer";

import ServiceNavbar from "./ServiceNavbar";

function Packages(props) {
  const paras = useParams();

  // sub categroy api

  const [subservice, setSubService] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const getsubcategroy = async () => {
      const res = await fetch(`https://www.admin.digitalnawab.com/api/all-package`);
      const getsubcategroy = await res.json();
      // console.log(getsubcategroy)
      // console.log(getsubcategroy.service)
      // console.log(getsubcategroy.sub_categroy)
      setSubService(await getsubcategroy)

      
    };
    getsubcategroy();

    
  }, []);

  // sub categroy details api start
  const [details, setDetails] = useState([]);

  // sub  categroy details data store

  function handleEvent(e) {
    let isMounted = true;

    const getdetails = async () => {
      const res = await fetch(`https://www.admin.digitalnawab.com/api/package-items/${e}`);
      const getdetails = await res.json();
      // console.log(getdetails);
      // console.log(getsubcategroy.service)
      // console.log(getsubcategroy.sub_categroy)

      if (isMounted) {
        setDetails(await getdetails);
      }
    };
    getdetails();
  }

  // onclick  data show
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  // sub categroy details api end

  const serviceData = details;

  //  sub categroy api store in subti start

  const subti = subservice;
  return (
    <>
      <ServiceNavbar />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr dlab-bnr-inr overlay-primary bg-pt"
          style={{
            backgroundImage: `url('https://www.divyanjalimakeupstudio.in/assets/images/banner/2.jpg')`,
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Packages</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Packages</li>
                  {/* <img src={"http://localhost:8000/" + name.banner_image} alt="" /> */}
                </ul>
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>

        {/* contact area */}
        <div className="content-block    hiides">
          {/* PRICING SECTION START */}
          <div className="section-full p-t80 p-b50 bg-orange-light  bg-brush-img ">
            <div className="section-full welcome-section-outer">
              <div
                className="welcome-section-tops shadow-lg  p-tb80 bodys dark-background"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/nrmkm7d/five-bells-washed-out-logo.png) , linear-gradient(to right, rgba(58, 61, 62, 1) 0%, rgba(58, 61, 62, 1) 100%)",
                }}
              >
                {/* inner page border design start */}
                <div className="outer-border">
                  <div className="mid-border">
                    <div className="inner-border">
                      <img
                        className="corner-decoration corner-left-top"
                        src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
                      />
                      <img
                        className="corner-decoration corner-right-top"
                        src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
                      />
                      <img
                        className="corner-decoration corner-right-bottom"
                        src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
                      />
                      <img
                        className="corner-decoration corner-left-bottom"
                        src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
                      />
                      <img
                        className="vertical-decoration top"
                        src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
                      />
                      <img
                        className="vertical-decoration bottom"
                        src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
                      />
                      {/* Page Content */}
                      <div className="container">
                        <div className="rows social-row">
                          <a
                            href="#"
                            target="_blank"
                            className="d-none"
                            style={{
                              backgroundImage:
                                "url(https://i.ibb.co/k0JQYv4/instagram-social-button.png)",
                            }}
                          />
                        </div>
                        <div className="rows">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                {/* TITLE START*/}
                                <div
                                  className="center wt-small-separator-outer section-head text-center"
                                  style={{ marginTop: "-75px" }}
                                >
                                  <h2
                                    data-title="Pricing"
                                    style={{
                                          color: "rgb(222, 155, 114)",
                                      textTransform: "uppercase",
                                    }}
                                  >
                                    PACKAGES
                                  </h2>
                                  {/* <h5 className="m-b10">WE ARE THE BEST UNISEX SALON IN LUCKNOW</h5> */}
                                  
                                </div>
                                {/* TITLE END*/}

                                <section
                                  className="py-5  "
                                  style={{
                                    background: "rgb(151 149 149 / 0%) ",
                                   
                                  }}
                                >
                                  <div className="container py-4">
                                    <div className="row  ">
                                      <div className="col-md-4">
                                        {/* Tabs nav */}
                                        <div
                                          className="nav flex-column nav-pills nav-pills-custom   tablets"
                                          id="v-pills-tab"
                                          role="tablist"
                                          aria-orientation="vertical"
                                          style={{ marginRight: "40px" }}
                                        >
                                          {subti?.map((hid, index) => {
                                            return (
                                              <>
                                                <a
                                                  className={
                                                    index === 0
                                                      ? "nav-link mb-3 p-3  shadow "
                                                      : "nav-link mb-3 p-3 shadow"
                                                  }
                                                  id={
                                                    "v-pills-home-tab" + index
                                                  }
                                                  data-toggle={"pill"}
                                                  href={"#v-pills-home" + index}
                                                  role="tab"
                                                  aria-controls="v-pills-home"
                                                  aria-selected="true"
                                                  onClick={() => {
                                                    handleEvent(hid.id);
                                                  }}
                                                >
                                                  <div className="row align-items-center">
                                                    <div className="col-md-8 text-left  small text-uppercase">
                                                      {" "}
                                                      <h6 className="htag">
                                                        {hid.package_title}
                                                      </h6>{" "}
                                                    </div>
                                                    <div className="col-md-4 text-right">
                                                      <span className="float-right text-right">
                                                        {" "}
                                                        <p className="fenal">
                                                          &#8377;
                                                          {hid.final_amount}
                                                        </p>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </>
                                            );
                                          })}
                                        </div>
                                      </div>

                                      <div className="col-md-8">
                                        <div
                                          className="tab-content"
                                          id="v-pills-tabContent"
                                          style={{ marginRight: "24px" }}
                                        >
                                          {subti?.map((dato, index) => {
                                            return (
                                              <>
                                                <div
                                                  className={
                                                    index === 0
                                                      ? "tab-pane fade shadow rounded bg-white show active  p-5"
                                                      : "tab-pane fade shadow rounded bg-white show "
                                                  }
                                                  id={"#v-pills-home" + index}
                                                  role="tabpanel"
                                                  aria-labelledby={
                                                    "v-pills-home-tab" + index
                                                  }
                                                  style={{
                                                    backgroundImage:
                                                      "/images/Background.png",
                                                  }}
                                                >
                                                  <div
                                                    className="wt-accordion acc-bg-white"
                                                    id="accordion5"
                                                  >
                                                    <div className="panel wt-panel">
                                                      <div className="row justify-content-center">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                                                          <div className="pricing-list-block bg-white p-a20">
                                                            
                                                            <div className="pricing-list-img p-b10">
                                                              <img
                                                                src="/images/sep-leaf-left.png"
                                                                alt
                                                              />
                                                            </div>

                                                            <ul>
                                                              {serviceData !== 0
                                                                ? serviceData?.map(
                                                                    (
                                                                      sid,
                                                                      index
                                                                    ) => {
                                                                      return (
                                                                        <>
                                                                          <li>
                                                                            <div className="price-list-info">
                                                                              <h5  className="pircing"
                                                                                style={{
                                                                                  fontWeight:
                                                                                    "600",
                                                                                }}
                                                                              >
                                                                                {
                                                                                  sid.item_title
                                                                                }
                                                                              </h5>
                                                                              {/* {sid.role !=
                                                                            "" ? (
                                                                              <p
                                                                                style={{
                                                                                  textTransfrom:
                                                                                    "uppercase",
                                                                                }}
                                                                              >
                                                                                {
                                                                                  sid.role
                                                                                }
                                                                              </p>
                                                                            ) : (
                                                                              ""
                                                                            )} */}
                                                                            </div>
                                                                            <div className="price-list-amount">
                                                                              <h4 class="text-black mount">
                                                                                <span class="amount-sign">
                                                                                  &#8377;
                                                                                </span>
                                                                                <span class="amount-price">
                                                                                  {
                                                                                    sid.price
                                                                                  }
                                                                                </span>
                                                                              </h4>
                                                                            </div>
                                                                          </li>
                                                                        </>
                                                                      );
                                                                    }
                                                                  )
                                                                : ""}
                                                            </ul>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* inner page border design end */}
              </div>
            </div>
          </div>
          {/* PRICING SECTION END */}
          {/* PRICING SECTION END */}
        </div>
        {/* contact area END */}
      </div>

      {/* offer slider start */}

      {/* offer slider end */}

      {/* header function End */}
      <Footer />
    </>
  );
}

export default Packages;
