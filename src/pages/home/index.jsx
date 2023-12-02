import React from "react";
import AboutUs6 from "../../components/About-Us6";
import Intro5 from "../../components/Intro5";
import Portfolio2 from "../../components/Portfolio2";
import Portfolio3 from "../../components/Portfolio3";
import Services3 from "../../components/Services3";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import MainSkin from "../../layouts/main-skin";

const Home6 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index2");
  }, []);
  return (
    <MainSkin>
      <Intro5 />
      <AboutUs6 />
      <Portfolio3 />
      <Services3 bigTitle grid />
      {/* <Portfolio2 /> */}
      <VideoWithTestimonials />
    </MainSkin>
  );
};

export default Home6;
