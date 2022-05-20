import React from "react";
import bootstrap from "bootstrap";
// import "./Pages/Accordion.css";

export default function Accordion(props) {
  return (
    <>
      {/* <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h6 className="accordion-header" id="flush-headingOne" style={{fontSize:"20px"}}>
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{ width: "670px" }}
            >
              <span style={{ float: "left" }}>1. Personal Make Up</span>
              <span style={{ float: "right" }}>
                {" "}
                4999/-  &nbsp; 25 Days{props.oneprice}{" "}
              </span>
    
            </button>
          </h6>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
             <span>.__</span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h6 className="accordion-header" id="flush-headingTwo" style={{fontSize:"20px"}}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo" 
              style={{ width: "670px" }}
              
            >
              <span style={{ float: "left" }}>2.	Professional Makeup Class</span>
              <span style={{ float: "right" }}>
                {" "}
                9999/- &nbsp;  10 Days{props.twoprice}{" "}
              </span>
            </button>
          </h6>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            .---
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h6 className="accordion-header" id="flush-headingThree" style={{fontSize:"20px"}}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{ width: "670px" }}
            >
              <span style={{ float: "left" }}>3.	Personal Hairstyling  Class</span>
              <span style={{ float: "right" }}>
                {" "}
                3999/- &nbsp;  05 Days{props.threeprice}{" "}
              </span>
            </button>
          </h6>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
             .__
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h6 className="accordion-header" id="flush-headingFour" style={{fontSize:"20px"}}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
              style={{ width: "670px" }}
            >
              <span style={{ float: "left" }}>4.Professional Hairstyling Class</span>
              <span style={{ float: "right" }}>
                {" "}
                7999/- &nbsp;  10 Days{props.threeprice}{" "}
              </span>
            </button>
          </h6>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
             .__
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h6 className="accordion-header" id="flush-headingFive" style={{fontSize:"20px"}}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
              style={{ width: "670px" }}
            >
              <span style={{ float: "left" }}>5. Nail Art Class</span>
              <span style={{ float: "right" }}>
                {" "}
                4999/- &nbsp;  05 Days{props.threeprice}{" "}
              </span>
            </button>
          </h6>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
             .__
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h6 className="accordion-header" id="flush-headingSix" style={{fontSize:"20px"}}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
              style={{ width: "670px" }}
            >
              <span style={{ float: "left" }}>6. Henna Mehendi Art</span>
              <span style={{ float: "right" }}>
                {" "}
                4999/- &nbsp;  07 Days{props.threeprice}{" "}
              </span>
            </button>
          </h6>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
             .__
            </div>
          </div>
        </div>
      </div> */}

      <div className="card card-image" style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.webp)'}}>
        {/* Content */}
        <div className="rgba-black-strong py-5 px-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8">
              {/*Accordion wrapper*/}
              <div className="accordion md-accordion accordion-5" id="accordionEx5" role="tablist" aria-multiselectable="true">
                {/* Accordion card */}
                <div className="card mb-4">
                  {/* Card header */}
                  <div className="card-header p-0 z-depth-1" role="tab" id="heading30">
                    <a data-toggle="collapse" data-parent="#accordionEx5" href="#collapse30" aria-expanded="true" aria-controls="collapse30">
                      <i className="fas fa-cloud fa-2x p-3 mr-4 float-left black-text" aria-hidden="true" />
                      <h4 className="text-uppercase white-text mb-0 py-3 mt-1">
                        Item #1
                      </h4>
                    </a>
                  </div>
                  {/* Card body */}
                  <div id="collapse30" className="collapse show" role="tabpanel" aria-labelledby="heading30" data-parent="#accordionEx5">
                    <div className="card-body rgba-black-light white-text z-depth-1">
                      <p className="p-md-4 mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                        3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et.</p>
                    </div>
                  </div>
                </div>
                {/* Accordion card */}
                {/* Accordion card */}
                <div className="card mb-4">
                  {/* Card header */}
                  <div className="card-header p-0 z-depth-1" role="tab" id="heading31">
                    <a data-toggle="collapse" data-parent="#accordionEx5" href="#collapse31" aria-expanded="true" aria-controls="collapse31">
                      <i className="fas fa-comment-alt fa-2x p-3 mr-4 float-left black-text" aria-hidden="true" />
                      <h4 className="text-uppercase white-text mb-0 py-3 mt-1">
                        Item #2
                      </h4>
                    </a>
                  </div>
                  {/* Card body */}
                  <div id="collapse31" className="collapse" role="tabpanel" aria-labelledby="heading31" data-parent="#accordionEx5">
                    <div className="card-body rgba-black-light white-text z-depth-1">
                      <p className="p-md-4 mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                        3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et.</p>
                    </div>
                  </div>
                </div>
                {/* Accordion card */}
                {/* Accordion card */}
                <div className="card mb-4">
                  {/* Card header */}
                  <div className="card-header p-0 z-depth-1" role="tab" id="heading32">
                    <a data-toggle="collapse" data-parent="#accordionEx5" href="#collapse32" aria-expanded="true" aria-controls="collapse32">
                      <i className="fas fa-cogs fa-2x p-3 mr-4 float-left black-text" aria-hidden="true" />
                      <h4 className="text-uppercase white-text mb-0 py-3 mt-1">
                        Item #3
                      </h4>
                    </a>
                  </div>
                  {/* Card body */}
                  <div id="collapse32" className="collapse" role="tabpanel" aria-labelledby="heading32" data-parent="#accordionEx5">
                    <div className="card-body rgba-black-light white-text z-depth-1">
                      <p className="p-md-4 mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                        3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et.</p>
                    </div>
                  </div>
                </div>
                {/* Accordion card */}
              </div>
              {/*/.Accordion wrapper*/}
            </div>
          </div>
        </div>
        {/* Content */}
      </div>
      {/* Card */}

     
    </>
  );
}
