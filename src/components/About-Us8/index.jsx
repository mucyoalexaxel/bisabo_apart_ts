/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const
  AboutUs8 = () => {
    return (
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 exp">
              <div className="mb-50">
                <h3 className="fw-400 text-u ls4">Bisabo Suites</h3>
              </div>
              <div className="box">
                <h2 className="fz-30 fw-600 mb-20">
                  Discover Kigali&apos;s Oasis
                </h2>
                <p>
                  Welcome to Bisabo Suites, your exclusive oasis in the heart of Kigali&apos;s vibrant Kimihurura neighborhood. Nestled in a residential area, our premier apartments provide a tranquil retreat amidst the bustling city life. Imagine strolling through tree-lined streets and exploring the local charm, all within reach of supermarkets, restaurants, and essential shops.
                </p>
              </div>
            </div>
            <div className="col-lg-7 img">
              <Image width={800} height={600} src="/assets/images/BisabosuitesLogo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  };

export default AboutUs8;