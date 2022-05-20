import React , {useEffect}  from "react";
import Home from "./component/Home";
import Contact from "./component/Pages/Contact"
import Academy from "./component/Pages/Academy";
import ReactGA from 'react-ga';

import About from "./component/Pages/About";
// import Contact from "./component/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thankyou from "./component/Pages/Thankyou";

import Appointmemt from "./component/Pages/Appointment";
import Mediacard from "./component/Mediacard";
import Services from './component/Pages/Services';
import Packages from "./component/Pages/Packages";
import Gallerys from './component/Pages/Gallery';
import Testing from "./Testing";



function App() {
 
     
  return (
    <>         
      <BrowserRouter  >
     
     
        <Routes>
      
       
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/media" element={<Mediacard />} />
          <Route path="/appointment" element={<Appointmemt />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/gallery" element={<Gallerys />} />
          <Route path="/service/:category_url" element={<Services />} />
        </Routes>

        {/* <About/> */}
      </BrowserRouter>
    
    </>
  );            
}

export default App;
