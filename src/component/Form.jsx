import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import inst11 from "../component/form1.jpg";
import one from "./3.jpg";

import emailjs from "emailjs-com";

export default function Form() {
  const form = useRef();
  let navigate = useNavigate();

  function sendEmail() {
    console.log("academy");
  }

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
          "template_snmxkpz",
          form.current,
          "user_h6SKeeiATmibi3Z5GSWso"
        )

        .then(setTimeout(navigate("/thankyou"), 5000), (error) => {
          console.log(error.text);
        });

      e.target.reset();

      console.log("hello navneet");
    }
    e.preventDefault();
    setFormErrors(validate(formValues));

    setIsSubmit(true);
  };
  // Form Validation end

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_pnf7r7t",
  //     "template_snmxkpz",
  //     form.current,
  //     "user_h6SKeeiATmibi3Z5GSWso")

  //     .then(
  //       setTimeout(navigate("/thankyou"), 5000)
  //       , (error) => {
  //         console.log(error.text);
  //       });

  //   e.target.reset();
  // }
  return (
    <>
      <div className="row imgup">
        <div className="col-lg-6 col-md-6 m-b30">
          <img src="images/form.jpg" alt="..."></img>
        </div>
        <div className="col-lg-6 col-md-6 m-b30 float shadow">
          <div className="p-a30 bg-gray clearfix">
            <h4>Feel free to get in touch! contact now</h4>
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
                        value={formValues.username}
                        onChange={handleChange}
                        required
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
                        value={formValues.email}
                        onChange={handleChange}
                        type="email"
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
                        placeholder="Contact No."
                        pattern="[7-9]{1}[0-9]{9}"
                        value={formValues.phone}
                        onChange={handleChange}
                        className="form-control"
                        required
                        maxlength="10"
                        minlength="10"
                      />
                    </div>
                    <p>{formErrors.phone}</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group col-log-12">
                      <select
                        name="course"
                        class="mdb-select col-log-12 md-form input-group"
                        searchable="Search here.."
                        className="required"
                      >
                        <option value="" disabled selected>
                          Choose Your Course
                        </option>
                        <option value="Online Course">Online Course</option>
                        <option value="Crash Course">Crash Course</option>
                        <option value="Advanced Course">Advanced Course</option>
                        <option value="Diploma Course">Diploma Course</option>
                        <option value="Selef Grooming Course">
                          Selef Grooming Course
                        </option>
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
                    onClick={handleSubmit}
                    // value="Submit"

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
      </div>
    </>
  );
}
