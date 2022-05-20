import React from "react";
import aboutImg from "./Pages/shama.jpg";
import hair from "../Asset/hair.jpg"
import beauty from "../Asset/beauty.jpg"
import makeup from "../Asset/makeup.jpg"
import nails from "../Asset/nails.jpg"

export default function Card() {
  return (
    <>
    

       <section className="row hero-section">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 text-center" >
          <span style={{padding: '0.1em'}} />
         
          
          <div className="row" style={{padding: '1.5em'}} />
        </div>
        <div className="card-grid">
          <a className="card">
            <div className="card__background" style={{backgroundImage:  `url(${hair})` }} />
            <div className="card__content" style={{textAlign: 'center'}}>
            
              <h3 className="card__heading">HAIR</h3>
            </div>
          </a>
          <a className="card" >
            <div className="card__background" style={{backgroundImage: `url(${beauty})`}} />
            <div className="card__content" style={{textAlign: 'left'}}>
              
              <h3 className="card__heading">BEAUTY</h3>
            </div>
          </a>
          <a className="card" >
            <div className="card__background" style={{backgroundImage: `url(${makeup})`}} />
            <div className="card__content" style={{textAlign: 'left'}}>
            
              <h3 className="card__heading">MAKE UP</h3>
            </div>
          </a><a className="card" >
            <div className="card__background" style={{backgroundImage: `url(${nails})`}} />
            <div className="card__content" style={{textAlign: 'left'}}>
            
              <h3 className="card__heading">NAILS</h3>
            </div>
          </a>
        </div>
      </section>

    </>
  );
}
