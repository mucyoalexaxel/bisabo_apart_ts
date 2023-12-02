/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              {/* <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6> */}
              <h3 className="fw-600 text-u ls1 mb-30">Our STORY</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <Link href="/about">
                <a className="btn-curve btn-bord btn-lit mt-30">
                  <span>Explore</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/images/BisabosuitesLogo.png" alt="" />
            {/* <div className="stauts">
              <div className="item">
                <img src="/assets/images/poolPortait.jpg" alt="" />

              </div><div className="item">
                <img src="/assets/images/poolPortait.jpg" alt="" />

              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
