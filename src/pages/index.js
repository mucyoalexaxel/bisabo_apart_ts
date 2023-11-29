import React from 'react';
import AboutUs8 from '../components/About-Us8';
import MainLayout from '../layouts/main';
import Portfolio2 from '../components/Portfolio2';
import Portfolio3 from '../components/Portfolio3';
import IntroWithVertical from '../components/Intro-with-vertical';
import Services2 from '../components/Services2'

const Home7 = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  });
  return (
    <MainLayout>
      <IntroWithVertical />
      <AboutUs8 />
      <Portfolio2 />
      <Portfolio3 />
    </MainLayout>
  );
};

export default Home7;
