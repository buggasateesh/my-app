import React, { Component } from "react";
import aboutlogo from "../assets/img/about.jpg";

export default class Aboutus extends Component {
    render() {
        return (
            <div className="about">
                
        <header className="section-header">
          <p>About Us</p>
        </header>
                <div className="row ">
                    <div className="col-lg-6 justify-content-center">
                        <div className="content">
                            <h3>Who We Are</h3>
                            <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                            <p>
                            Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                            </p>
                            <div class="text-center text-lg-start">
                            <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                <span>Read More</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 align-items-center" >
                    <img src={aboutlogo} class="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}