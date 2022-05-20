import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
// import "./Css/Custom.css"

import Footer from "../Footer";
import Offer from "./Offer";
import ServiceNavbar from "./ServiceNavbar";

function Services(props) {
  const [service, setService] = useState([]);
  const paras = useParams();

  useEffect(() => {
    const getacademyoffer = async () => {
      const res = await fetch(
        "https://www.admin.digitalnawab.com/api/all_categroy"
      );
      const getacademyoffer = await res.json();
      // console.log(getacademyoffer)
      setService(await getacademyoffer);
    };
    getacademyoffer();
  }, []);

  // sub categroy api

  const [subservice, setSubService] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const getsubcategroy = async () => {
      const res = await fetch(
        `https://www.admin.digitalnawab.com/api/service-deatils/${paras.category_url}`
      );
      const getsubcategroy = await res.json();
      // console.log(getsubcategroy)
      // console.log(getsubcategroy.service)
      // console.log(getsubcategroy.sub_categroy)

      if (isMounted) {
        setSubService(await getsubcategroy);
      }
    };
    getsubcategroy();

    return () => {
      isMounted = false;
    };
  }, [paras]);

  // sub categroy details api start
  const [details, setDetails] = useState([]);

  // sub  categroy details data store

  function handleEvent(e) {
    let isMounted = true;

    const getdetails = async () => {
      const res = await fetch(
        `https://www.admin.digitalnawab.com/api/service-by-Subcategory/${e}`
      );
      const getdetails = await res.json();
      // console.log(getdetails);
      // console.log(getsubcategroy.service)

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

  const response = service;

  const serviceData = details.data;

  //  sub categroy api store in subti start

  const subti = subservice.sub_categroy;

  return (
    <>
      {response.map((name, index) => {
        if (name.category_url === paras.category_url) {
          return (
            <>
              {/* header function start */}

              {console.log()}
              {/* { img = "http://localhost:8000/"+name.banner_image} */}

              <ServiceNavbar />

              <div className="page-content bg-white" key={index}>
                <div
                  className="dlab-bnr-inr dlab-bnr-inr overlay-primary bg-pt"
                  style={{
                    backgroundImage: `url('https://www.admin.digitalnawab.com/${name.banner_image}')`,
                  }}
                >
                  <div className="container">
                    <div className="dlab-bnr-inr-entry  text-center">
                      <h1 className="text-white">{name.sub_category_title}</h1>
                      {/* Breadcrumb row */}
                      {/* <div className="breadcrumb-row"> */}
                        {/* <ul className="list-inline">
                          <li>
                            <a href="/">Home</a>
                          </li> */}
                          {/* <li>{name.category_title}</li> */}
                          {/* <img src={"http://localhost:8000/" + name.banner_image} alt="" /> */}
                        {/* </ul> */}
                      {/* </div> */}
                      {/* Breadcrumb row END */}
                    </div>
                  </div>
                </div>

                {/* contact area */}
                <div className="content-block hiddss">
                  <div
                    className="section-full content-inner-2 shadow p-3 mb-5  rounded bodys dark-background"
                    style={{
                      marginTop: "30px",
                      backgroundColor: "#e0b44b1c",
                      
                    }}
                  >
                    <div className="outer-border">
                      <div className="mid-border">
                        <div className="inner-border">
                          
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
                              <div className="col-lg-12 text-center">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12 mt-5 text-center  rightShift">
                                      <h2
                                        className="m-t0 m-b10 fw6 text-center"
                                        style={{color: "rgb(125 96 62)" }}
                                      >
                                        {name.category_title}
                                      </h2> 

                                     <div className="dlab-separator-outer m-b0"><div className="dlab-separator text-primary style-icon"><i className="flaticon-spa text-primary" /></div></div>

                                      <p
                                        className="borderP text-justify"
                                        style={{ color: "black" ,marginRight:"-60px" }}
                                      >
                                        {name.category_meta_description}
                                      </p>
                                      <p
                                        className="borderP text-justify"
                                        style={{ color: "black" }}
                                      >
                                        {name.category_short_description}
                                      </p>
                                      <p> &nbsp;</p>
                                      <p> &nbsp;</p>
                                      <p> &nbsp;</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* end */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PRICING SECTION START */}
                  <div
                    className="section-full p-t5 p-b50 bg-orange-light  bg-brush-img bodys dark-background  hiiden"
                    style={{
                      backgroundColor: "rgba(224, 180, 75, 0.11)",
                    }}
                  >
                    <div className="outer-border">
                      <div className="mid-border">
                        <div className="inner-border">
                          
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
                              <div className="col-lg-12 text-center">
                                <div className="section-full welcome-section-outer">
                                  <div
                                    className="welcome-section-tops  p-tb80"
                                    style={{ marginTop: "140px" }}
                                  >
                                    <div className="container">
                                      <div className="row rowss">
                                        <div className="col-lg-12 col-md-12">
                                          {/* TITLE START*/}
                                          <div
                                            className="center wt-small-separator-outer section-head text-center"
                                            style={{ marginTop: "-180px" }}
                                          >
                                            <h2
                                              className="text-centers"
                                              data-title="Pricing"
                                              style={{
                                                 color: "rgb(125 96 62)",
                                                textTransform: "uppercase",
                                              }}
                                            >
                                              {name.category_title} PRICE
                                            </h2>
                                            {/* <h5 className="m-b10">WE ARE THE BEST UNISEX SALON IN LUCKNOW</h5> */}
                                            <div className="dlab-separator-outer m-b0  text-center" style={{marginRight:"70px"}}>
                                              <div className="dlab-separator text-primary style-icon">
                                                <i className="flaticon-spa text-primary" />
                                              </div>
                                            </div>
                                          </div>
                                          {/* TITLE END*/}

                                          <section className="py-5  ">
                                            <div className="container py-4">
                                              <div className="row  ">
                                                <div className="col-md-4">
                                                  {/* Tabs nav */}
                                                  <div
                                                    className="nav flex-column nav-pills nav-pills-custom pillsing"
                                                    id="v-pills-tab"
                                                    role="tablist"
                                                    aria-orientation="vertical"
                                                    style={{
                                                      marginRight: "40px",
                                                    }}
                                                  >
                                                    {subti?.map(
                                                      (hid, index) => {
                                                        return (
                                                          <>
                                                            <a
                                                              className={
                                                                index == 0
                                                                  ? "nav-link mb-3 p-3  shadow  custom-btn btn-6    widddth "
                                                                  : "nav-link mb-3 p-3 shadow  custom-btn btn-6 widddth"
                                                              }
                                                              id={
                                                                "v-pills-home-tab" +
                                                                index
                                                              }
                                                              data-toggle={
                                                                "pill"
                                                              }
                                                              href={
                                                                "#v-pills-home" +
                                                                index
                                                              }
                                                              role="tab"
                                                              aria-controls="v-pills-home"
                                                              aria-selected="true"
                                                              onClick={() => {
                                                                handleEvent(
                                                                  hid.id
                                                                );
                                                              }}
                                                            >
                                                              <span
                                                                className="font-weight-bold small text-uppercase"
                                                                style={{
                                                                  color:
                                                                    "#9d7200",
                                                                }}
                                                              >
                                                                {
                                                                  hid.sub_category_title
                                                                }
                                                              </span>
                                                            </a>
                                                          </>
                                                        );
                                                      }
                                                    )}
                                                  </div>
                                                </div>

                                                <div className="col-md-8">
                                                  <div
                                                    className="tab-content contentss"
                                                    id="v-pills-tabContent"
                                                    style={{
                                                      marginRight: "24px",
                                                    }}
                                                  >
                                                    {subti?.map(
                                                      (dato, index) => {
                                                        return (
                                                          <>
                                                            <div
                                                              className={
                                                                index == 0
                                                                  ? "tab-pane fade shadow rounded bg-white show active  p-5 paning"
                                                                  : "tab-pane fade shadow rounded bg-white show paning "
                                                              }
                                                              id={
                                                                "#v-pills-home" +
                                                                index
                                                              }
                                                              role="tabpanel"
                                                              aria-labelledby={
                                                                "v-pills-home-tab" +
                                                                index
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
                                                                          <h3 className="head3">
                                                                            {" "}
                                                                            CHOOSE
                                                                            YOUR
                                                                            SERVICE
                                                                          </h3>
                                                                          <img
                                                                            src="/images/sep-leaf-left.png"
                                                                            alt
                                                                          />
                                                                        </div>

                                                                        <ul>
                                                                          {serviceData !==
                                                                          0
                                                                            ? serviceData?.map(
                                                                                (
                                                                                  sid,
                                                                                  index
                                                                                ) => {
                                                                                  return (
                                                                                    <>
                                                                                      <li>
                                                                                        <div className="price-list-info">
                                                                                          <h5 className="head4">
                                                                                            {
                                                                                              sid.service_title
                                                                                            }
                                                                                          </h5>
                                                                                          {sid.role !=
                                                                                          null ? (
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
                                                                                          )}
                                                                                        </div>
                                                                                        <div className="price-list-amount">
                                                                                          <h5 class="text-black head4">
                                                                                            <span class="amount-sign">
                                                                                              &#8377;
                                                                                            </span>
                                                                                            <span class="amount-price">
                                                                                              {
                                                                                                sid.price
                                                                                              }
                                                                                            </span>
                                                                                          </h5>
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
                                                      }
                                                    )}
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

                          {/* end */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* PRICING SECTION END */}
                  {/* PRICING SECTION END */}
                </div>
                {/* contact area END */}
              </div>

              {/* offer slider start */}

              {/* offer start */}
              <div
                className="section-full content-inner overlay-white-middle"
                style={{
                  backgroundPosition: "bottom, top",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  marginTop: "90px",
                }}
              >
                <div className="container-fluid">
                  <div className="section-head text-black text-center">
                    <h2
                      className="text-primary m-b10"
                      style={{ color: "#6b4c34" }}
                    >
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

              {/* offer slider end */}

              {/* header function End */}
              <Footer />
            </>
          );
        } else console.log("");
      })}

      {/* <div> hello :{paras.category_url}</div> */}
    </>
  );
}

export default Services;
