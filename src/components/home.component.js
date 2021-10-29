import React, { Component } from "react";
import homelogo from "../assets/img/hero-img.png";

export default class Home extends Component {
    render() {
        return (
          <div className="home">
              <div className="row">
                <div className="col-lg-6 justify-content-center">
                <h1 className="">We offer modern solutions for growing your business</h1>
                <h2 className="">We are team of talented designers making websites with Bootstrap</h2>
                <div className="">
                    <div className="text-center text-lg-start">
                    <a href="/about" className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Get Started</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 hero-img " data-aos="zoom-out" data-aos-delay="200">
                <img src={homelogo} className="img-fluid" alt=""/>
                </div>
            </div>
          </div>
        );
    }
}