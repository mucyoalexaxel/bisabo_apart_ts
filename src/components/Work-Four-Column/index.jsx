/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import initIsotope from '../../common/initIsotope';
import gallery from '../../data/gallery.json';

const WorkFourColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img four-col section-padding">
        <div className="container-fluid">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".interior">Interior</span>
              <span data-filter=".exterior">Exterior</span>
              <span data-filter=".rooms">Rooms</span>
            </div>
          </div>
          <div className="row gallery">
            {gallery.map((single, i) => (
              <div
                key={i}
                className={`col-lg-3 col-md-6 items ${single.filterClass}`}
              >
                <div className="item">
                  <div className="img">
                    <img src={single.image} alt={single.title} />
                  </div>
                  <div className="cont">
                    <h5>
                      <Link href="#">{single.title}</Link>
                    </h5>
                    {single.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFourColumn;
