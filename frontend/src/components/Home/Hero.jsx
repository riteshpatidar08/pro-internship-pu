import React from 'react';
import Slider from 'react-slick';
import man from './../../assets/men.png';
import woman from './../../assets/women.png';
import beg from './../../assets/beg.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css'
function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={man} className="h-full w-full object-cover" />
        </div>
        <div>
          <img src={woman} className="h-full w-full object-cover" />
        </div>
        <div>
          <img src={beg} className="h-full w-full object-cover" />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
