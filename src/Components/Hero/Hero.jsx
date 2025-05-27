import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={5000}
        className={styles.carousel}
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
