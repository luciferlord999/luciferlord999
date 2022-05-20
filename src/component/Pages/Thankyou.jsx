import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Pages/thankyou.css";
import Footer from "../Footer";
import ReactGA from "react-ga";
import ServiceNavbar from "./ServiceNavbar";
import Helmet from "react-helmet";

export default function Thankyou() {
  let navigate = useNavigate();

  // useEffect(() => {
  //   window.gtag("config", "AW-10851482502");
  //   window.gtag("event", "conversion", {
  //     send_to: "AW-10851482502/IEY2CKzLrqcDEIb3sbYo",
  //   });
  // }, []);


  useEffect(()=>{
    window.gtag("config", "AW-10851482502");
    window.gtag("event" ,"conversion", {
          send_to: "AW-10851482502/IEY2CKzLrqcDEIb3sbYo",
        });
  },[]);

  return (
    <>
      {/* header start */}

      <ServiceNavbar />

      {/* header end */}

      <div className="jumbotron text-center">
        <h1 className="display-3">Thank You!</h1>
        <p className="lead">
          <strong>Thank you for contact . We will get in touch soon.</strong>
        </p>
        <hr />
        <p>
          Having trouble? <a href>Contact us</a>
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-sm-5" href="/" role="button">
            Continue to homepage
          </a>
        </p>
      </div>

      <Footer />
    </>
  );
}
