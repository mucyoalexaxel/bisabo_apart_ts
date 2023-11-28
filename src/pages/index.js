import React from 'react';
import AboutUs8 from '../components/About-Us8';
import MainLayout from '../layouts/main';
import Portfolio2 from '../components/Portfolio2';
import Portfolio3 from '../components/Portfolio3';
import IntroWithVertical2 from '../components/Intro-with-vertical2';

const Home7 = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  });
  return (
    <MainLayout>
      <IntroWithVertical2 />
      <AboutUs8 />
      <Portfolio2 />
      <Portfolio3 />
    </MainLayout>
  );
};

export default Home7;
