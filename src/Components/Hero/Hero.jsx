// Hero.js or a new Banner.js file
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS
import { Carousel } from "react-responsive-carousel";
import styles from "./Hero.module.css";

//the big pictures we see sliding at the top of Amazon’s homepage.
const Hero = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={5000}
      >
        <div>
          <img src="/images/banner1.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="/images/banner2.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="/images/banner3.jpg" alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
