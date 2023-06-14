/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AboutUs8 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 exp">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-400 text-u ls4">Our Company</h3>
            </div>
            <div className="box">
              <h2 className="fz-40 fw-600 ls1 mb-20">
                Where Luxury <br />
                Meets Lifestyle.
              </h2>
              <p>
                We are a leading provider of luxury apartment accommodations,
                offering a remarkable blend of style, comfort, and personalized
                service for discerning guests seeking a refined living
                experience.
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/images/logo.jpeg" alt="" />

            <div className="feat mt-30">
              <div className="item">
                <div>
                  <h5>01</h5>
                  <h6>Excellence</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>02</h5>
                  <h6>Serene</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>03</h5>
                  <h6>Innovative</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;
