import React from "react";
import "./Slider.css";
import imgPokedex from "../../media/imgPokedex.jpg";
import imgWeather from "../../media/imgWeather.jpg";
import imgToDoApp from "../../media/imgToDoApp.jpg";

const slidesInfo = [
  {
    src: imgPokedex,
    alt: "Image Pokedex",
    desc: "Pokedex",
    url: "https://github.com/hectoralejandrg/pokedex-react",
  },
  {
    src: imgWeather,
    alt: "Weather App",
    desc: "Weather App",
    url: "https://github.com/hectoralejandrg/weatherapp",
  },
  {
    src: imgToDoApp,
    alt: "To Do App",
    desc: "To Do App",
    url: "https://github.com/hectoralejandrg/todoapp-react",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.url} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
    </a>
  </div>
));

export default slides;
