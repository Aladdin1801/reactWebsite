import React from 'react';
import ig7 from "../src/images/ig7.svg";
import { NavLink } from 'react-router-dom';


const About = () =>{
  return (
    <>
    <section id="header" className="d-flex align-items-centre">
     <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">  
        <div className="row">
          <div className="col-md-6 pt-6 pt-lg-0 order-lg-1 d-flex justify-content-centre flex-column">
            <h1>
            We envision a world where anyone, anywhere has the power to transform their life through learning.
            </h1>
            <div className="mt-3">
          <NavLink className="btn-get-started" to="/service">
            Start Learning
          </NavLink>
          </div>
          </div> 
          <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={ig7} className="img-fluid animated" alt="home img"/>
          </div> 
        </div>
       </div>
      </div>
     </div>
    </section>
    </>
  )
}

export default About;