import React, { useState } from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const Banner = (props) => {
  const settings = {
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };

  const Images = [
    {
      name: "img-1",
      url: "./Images/slider2.jpg",
      link: "_ffRLhWSPGk",
    },
    {
      name: "img-2",
      url: "./Images/slider4.jpg",
      link: "iCw-LfLw_Zk",
    },
    {
      name: "img-3",
      url: "./Images/slider5.png",
      link: "Ncwkodt5dA4",
    },
  ];

  const [trailer, setTrailer] = useState(false);
  const trailerMovie = () => {
    setTrailer(true);
  };

  return (
    <section className="carousel">
      <Slider {...settings}>
        {Images.map((img, index) => {
          return (
            <div key={index}>
              <img src={img.url} alt="img" width="100%" />
              <React.Fragment>
                <ModalVideo
                  channel="youtube"
                  isOpen={trailer}
                  videoId={img.link}
                  onClose={() => setTrailer(false)}
                  className="trailer"
                ></ModalVideo>
                <button onClick={trailerMovie} className="trailer">
                  <i class="fas fa-play"></i>
                </button>
              </React.Fragment>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Banner;
