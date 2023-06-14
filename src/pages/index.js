import React from 'react';
import AboutUs8 from '../components/About-Us8';
import MainLayout from '../layouts/main';
// import Services7 from "../components/Services7";
import Portfolio2 from '../components/Portfolio2';
import Portfolio3 from '../components/Portfolio3';
import VideoWithTestimonials from '../components/Video-with-testimonials';

import IntroWithVertical2 from '../components/Intro-with-vertical2';
import WorkWithoutFilter from '../components/Work-Without-Filter';

const Home7 = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  });
  return (
    <MainLayout>
      <IntroWithVertical2 />
      <AboutUs8 />
      {/* <Services7 /> */}
      <Portfolio2 />
      <Portfolio3 />
      {/* <VideoWithTestimonials /> */}
    </MainLayout>
  );
};

export default Home7;
