import React from 'react'
import { Carousel } from "react-bootstrap";
import image1 from "./slider1.jpg";
import image2 from "./slider.jpg";
import image3 from "./slider2.jpg";

function slider2() {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />

      
    </Carousel.Item>
  </Carousel>
  )
}

export default slider2