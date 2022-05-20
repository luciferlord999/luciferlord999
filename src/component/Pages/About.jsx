import React, { useEffect, useState } from "react";

import Footer from "../Footer";
import aboutImg from "../Pages/shama.jpg";
import aboutImg2 from "../Pages/sneha.jpg";
import { NavLink } from "react-router-dom";
import ServiceNavbar from '../Pages/ServiceNavbar'

import "../Header.css";
import { Link } from "react-router-dom";

//

export default function About() {
  // api call
  

  return (
    <>
      {/* header */}
      <ServiceNavbar/>

   

      <div className="page-content bg-white">
        {/* inner page banner */}
        <div
          className="dlab-bnr-inr overlay-primary "
          style={{ backgroundImage: "url(/images/about-bg.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">About Us</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>
        {/* inner page banner END */}

        <div className="container">
          <div className="section-head text-black text-center">
            <h2 className="m-b10" style={{ color: "#6b4c34" }}>
              OUR STORY
            </h2>

            {/* <h5 className="m-b10">WE ARE THE BEST UNISEX SALON IN LUCKNOW</h5> */}
            <div className="dlab-separator-outer m-b0">
              <div className="dlab-separator text-primary style-icon">
                <i className="flaticon-spa text-primary" />
              </div>
            </div>
            <h6>
              ENTREPRENEURSHIP WAS ONCE CONSIDERED A MAN’S DOMAIN, BUT THE TIDE
              HAS SHIFTED.
            </h6>
            <p>
              The new generation women across the world have overcome all
              negative notions and have proved themselves without doubt in all
              spheres of life. Mrs.Shama Vig & Mrs. Sneha Charan Co Founders &
              Directors of The Topknot Salon is one such lady who have broken
              all odds in one of the most conservative cities in India ,
              Lucknow, to create a niche for themselves in the field of personal
              grooming and beauty services. The Kind of personalized approach
              and attention which they give to their clients makes them stand
              out distinctively in the industry Personal grooming , Fashion
              styling and Beauty care services need an eye for detail and need
              continuous research and experimentation in order to come up with
              innovative ideas , looks , concepts and themes.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://nowlucknow.com/head-to-the-top-knot-by-sneha-charan-for-the-most-luxurious-salon-experience-in-lucknow/"
              className="site-button outline"
            >
              Know More About salon
            </a>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about align-items-stretch  ">
              <div className="wrap-about-border ">
                <div className="img" />
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-md-7 wrap-about pr-md-4    ">
              <h6 className="our">SHAMA VIG CO – FOUNDER & DIRECTOR</h6>
              <p
                data-aos="zoom-out"
                data-aos-duration={1000}
                data-aos-offset={100}
                className="aos-init"
              >
                Mrs Shama Vig is an Indian entrepreneur and the co-founder of
                The Top Knot Salon Lucknow, a beauty and wellness conglomerate
                She has taken training from Shahnaz Husain& blossom kocher 20
                year ago in Beauty & wellness after working one on one clients
                personally she has gained expertise in beauty, food and
                nutrition and skin care has taken her so far .. During her 20
                years Journey in this industry she has rigorously worked on her
                skills & knowledge in beauty and wellness and become Skilled and
                Knowledgeable Expert Just like professionally skilled Experts
                are . Her aim is to establish an effective and efficient
                eco-system for development and imparting of skills in Beauty and
                Wellness Believes it’s never too late or too early to begin
                taking care of your skin . In Top Knot Salon, solutions have
                been developed keeping in mind the general needs of your skin as
                well as the various problems that could possibly affect it. You
                could either pick a treatment that appeals to you the most or
                ask her to suggest any after examining your skin type and
                identifying youxr particular requirement. Either way, it is our
                aim to help restore and promote the wellness of your skin and
                spirit. Vision is To be the preferred brand in health and beauty
                business, national by building loyalty & commitment. She is a
                businesswomen looked-up-to for her vehemence for The Top Knot
                Salon, making it the most stable and fastest growing high street
                salon chain in India with world-class amenities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about align-items-stretch  ">
              <div className="wrap-about-border ">
                <div className="img" />
                <img src={aboutImg2} alt="" />
              </div>
            </div>
            <div className="col-md-7 wrap-about pr-md-4    ">
              <h6 className="our">SNEHA CHARAN CO – FOUNDER & DIRECTOR</h6>
              <p>
                Ms.Sneha Charan co-founder & Director The Top Knot Salon is a
                Fashion / Bridal Stylist & Makeover Expert with an experience of
                more than 10 years in the Beauty & Wellness industry . After her
                Post Graduation in Management Studies She took up On the job
                training program with her mother ,Mrs .Shama Vig ,Founder –
                Director The Top Knot Salon who already was a pioneer in
                wellness industry with work experience of more tan 25 years
                .Being a make up enthusiast & rigorously working one on one with
                her clients she has come so far .Her make up style is always
                Natural Experimental yet it’s Glamourous. Having said that , Our
                founder’s vision & creativity got her many projects related to
                Brand Promotions & campaign planning etc . She has worked with a
                lot of prestigious brands like Aracelli jewellers , Hunar Multi
                Designer Store , Mohan Shyam Kalyan Das Jewellers , Bhasins
                Brothers & Sons , Badri Jewllers , Lala Jugal Kishore Jewellers
                , Mehra Arts , FICCI Flo events & many more . Her unique sense
                of style & perfect detailing makes her one of the most desired
                stylist even by the renowned bloggers & models in the city . She
                is an Inspiration to many new budding entrepreneurs in Fashion &
                wellness industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* contact area END */}

      <Footer />
    </>
  );
}
