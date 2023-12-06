import React from 'react';
import Link from 'next/link';
import worksCardEffect from '../../common/worksCardEffect';

const Portfolio2 = () => {
  React.useEffect(() => {
    worksCardEffect();
  }, []);
  return (
    <section className="portfolio full-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 cluom current" data-tab="tab-1">
            <div className="info">
              <h6 className="custom-font">Interior</h6>
              <h5>Kitchen</h5>
            </div>
            <div className="more">
              <Link href="/gallery">
                <a>
                  View More <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-2">
            <div className="info">
              <h6 className="custom-font">Exterior</h6>
              <h5>Balcony</h5>
            </div>
            <div className="more">
              <Link href="/gallery">
                <a>
                  View More <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-3">
            <div className="info">
              <h6 className="custom-font">Exterior</h6>
              <h5>Swimming Pool</h5>
            </div>
            <div className="more">
              <Link href="/gallery">
                <a>
                  View More <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-4">
            <div className="info">
              <h6 className="custom-font">Exterior</h6>
              <h5>Modern & Innovative</h5>
            </div>
            <div className="more">
              <Link href="/gallery">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="glry-img">
        <div
          id="tab-1"
          className="bg-img tab-img current"
          style={{ backgroundImage: `url(/assets/images/night-kitchen.jpeg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-2"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/images/day-balcony-1.jpeg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-3"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/images/updatedPool3.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-4"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/images/updatedBalcon.jpg)` }}
          data-overlay-dark="2"
        ></div>
      </div>
    </section>
  );
};

export default Portfolio2;
