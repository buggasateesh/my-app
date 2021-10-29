import React, { Component } from "react";

export default class Contactus extends Component {
    render() {
        return (
      <div className="contactus">

        <header className="section-header">
          <p>Contact Us</p>
        </header>

        <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12">

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="info-box">
                  <i className=""></i>
                  <h3>Address</h3>
                  <p>AXXX Adam Street,<br/>New York, NY XXXXX</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="info-box">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+1 XXX XXXX XXX<br/>+1 XXXX XXX XXX</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="info-box">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="info-box">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <form action="#" method="post" className="contact-form">
              <div className="row ">

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>

      </div>
      
        );
    }
}