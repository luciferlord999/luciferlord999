// import React, { useEffect, useState } from 'react';

// // import './owl.css';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// //Owl Carousel Settings
// const options = {
//     margin: 30,
//     responsiveClass: true,
//     nav: true,
//     autoplay: false,

//     smartSpeed: 1000,
//     responsive: {
//         0: {
//             items: 1,
//         },
//         400: {
//             items: 1,
//         },
//         600: {
//             items: 2,
//         },
//         700: {
//             items: 3,
//         },
//         1000: {
//             items: 5,

//         }
//     },
// };

// export default function Owl() {
//     const [academy, setAcademy]= useState([]);
//     useEffect( ()=>{
//     const getacademyoffer = async ()=>{
//       const res= await fetch('http://localhost:8000/api/all-acadmey');
//       const getacademyoffer= await res.json();
//       //console.log(getbanner);
//       setAcademy(await getacademyoffer);
//     }
//    getacademyoffer();

//   },[] );
//   return(
//     <>
//     <OwlCarousel className="slider-items owl-carousel" {...options}>

//     {
//         academy.map((pic , index)=>{
//             return(
//                 <>
//                 <div className='item' key={index}> <img src={"http://localhost:8000/"+pic.offer_pic} alt="" /></div>
//                 </>

//             )
//         })
//     }

//    {/* <div className='item'>< img src = "/images/Academy/2.jpg"/ >
//    </div>
//    <div className='item'>< img src = "/images/Academy/3.jpg" / >
//    </div>
//    <div className='item'>< img src = "/images/Academy/4.jpg" / >
//    </div>
//    <div className='item'>< img src ="/images/Academy/5.jpg" / >
//    </div>
//    <div className='item'>< img src ="/images/Academy/6.jpg" / >
//    </div> */}

//     </OwlCarousel>

//     </>
//   )

// };

import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 450px;
width: 100%;
background-color: rgb(146, 111, 16)!;
color: rgb(107, 76, 52)!;
margin: 15px;
font-size: 4em;
box-shadow:rgb(107, 76, 52)!;
background-color: rgba(103,58,183,.5)!;
button.rec-dot: 

button.rec-dot:hover, button.rec-dot:active, button.rec-dot:focus  {
  box-shadow: 0 0 1px 3px rgba(235,16,16,0.5);
}
`;



function Owl() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };






  const [academy, setAcademy] = useState([]);
  useEffect(() => {
    const getacademyoffer = async () => {
      const res = await fetch(
        "https://www.admin.digitalnawab.com/api/all-acadmey"
      );
      const getacademyoffer = await res.json();
      //console.log(getbanner);
      setAcademy(await getacademyoffer);
    };
    getacademyoffer();
  }, []);

  return (
    <>
      <div className="styling-example" style={{ marginTop: "55px" }}>
      <Slider {...settings}>
          {academy.map((retbanner, index) => (
            <div key={index}>
              <img
              style={{ padding: "20px" }}
                src={
                  "https://www.admin.digitalnawab.com/" + retbanner.offer_pic
                }
              />
            </div>
          ))}
          </Slider>
      </div>
    </>
  );
}

export default Owl;
