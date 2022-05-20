import React, { useCallback, useEffect, useState } from "react";
import ServiceNavbar from "./ServiceNavbar";
import { render } from "react-dom";
import "./Gallery.css";
import Footer from "../../component/Footer";
import { FaWindowClose } from "react-icons/fa";

function Gallerys() {
  // gallery api call

  const [subservice, setSubService] = useState([]);
  useEffect(() => {
    const getsubcategroy = async () => {
      const res = await fetch(
        `https://www.admin.digitalnawab.com/api/all_image`
      );
      const getsubcategroy = await res.json();
      // console.log(getsubcategroy)
      // console.log(getsubcategroy.service)
      // console.log(getsubcategroy.sub_categroy)

      setSubService(await getsubcategroy);
    };
    getsubcategroy();
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

 

  const [model, setModel] = useState(false);
  const [temimgSrc, setTemimgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTemimgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <ServiceNavbar />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr dlab-bnr-inr overlay-primary bg-pt"
          style={{
            backgroundImage: `url('https://www.divyanjalimakeupstudio.in/assets/images/banner/9.jpg')`,
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Gallery</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Gallery</li>
                  {/* <img src={"http://localhost:8000/" + name.banner_image} alt="" /> */}
                </ul>
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>

        <div className="galleryss">
          {subservice?.map((imh, index) => {
            return (
              <>
                <div
                  className="picss"
                  key={index}
                  
                >
                  <img
                    src={"https://www.admin.digitalnawab.com/" + imh.image_url}
                    alt=""
                    style={{ width: "100%" }}
                    onClick={() =>
                    getImg(
                      "https://www.admin.digitalnawab.com/"+imh.image_url
                    )
                  }
                  />
                </div>
              </>
            );
          })}

          <div className={model ? "modelss open" : "modelss"}>
            <img  className="posp" src={temimgSrc}   alt="" srcset="" />
            <FaWindowClose
              onClick={() => {
                setModel(false);
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallerys;
