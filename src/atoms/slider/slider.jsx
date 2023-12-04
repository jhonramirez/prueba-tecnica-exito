import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import { imageSlider } from "../../assets/data/data";

export const Slider = () => {
  return (
    <HeroSlider
      height={"70vh"}
      autoplay
      navDescription={null}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
      }}
    >
      {imageSlider.map((image, i) => (
        <Slide
          key={i}
          background={{
            backgroundImageSrc: image.url,
          }}
        />
      ))}
    </HeroSlider>
  );
};
