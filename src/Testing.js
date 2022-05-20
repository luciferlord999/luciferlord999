import React from "react";

function Testing() {
  return (
    <>
      <div className="section-full p-t80 p-b50 bg-orange-light">
        <div className="container">
          <div className="section-content">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="home-contact-section m-b30">
                    <form
                      className="cons-contact-form"
                      method="post"
                      action="https://thewebmax.com/saloni/form-handler2.php"
                    >
                      {/* TITLE START*/}
                      <div className="left wt-small-separator-outer">
                        <div className="wt-small-separator">
                          <div className="sep-leaf-left">
                            <img src="images/sep-leaf-left.png" alt />
                          </div>
                          
                        </div>
                      </div>
                      <h2>Book Appointment</h2>
                      {/* TITLE END*/}
                      <div className="row m-b30">
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <input
                              name="username"
                              type="text"
                              required
                              className="form-control"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <input
                              name="email"
                              type="text"
                              className="form-control"
                              required
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <input
                              name="phone"
                              type="text"
                              className="form-control"
                              required
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <select
                              name="course"
                             
                             
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
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
                              rows={4}
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="site-button site-btn-effect"
                          >
                            Send us a message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="contact-right-section">
                    <div className="wt-media">
                      <img
                        src="https://www.thetopknot.in/images/banner/image/Book.jpg"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testing;
