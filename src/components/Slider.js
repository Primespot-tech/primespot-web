import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";
import Ravi from "../imgs/my_pic.jpg";
import Thiranya from "../imgs/thiranya.jpg";
import Sairam from "../imgs/sairam.jpg";

export default class Sliders extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplayspeed: 5000,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings} className="sliders">
          <div className="slider-cards" style={{ width: "100px" }}>
            <div className="profile-card">
              <div className="Profile-card-p">
                An experienced full stack webdeveloper good in MERN stack
                development and linux server administrator, Working as a
                freelance web developer for few years.
              </div>
              <div className="profile-card-img">
                <img
                  className="profile-img"
                  src={Ravi}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "75px", margin: "auto" }}
                />
              </div>
              <div
                style={{ textAlign: "center", margin: "10px" }}
                className="profile-card-name"
              >
                Kishore Ravi
              </div>
              <div className="profile-card-desig">
                Full stack webdeveloper & server administrator
              </div>
            </div>
          </div>
          <div className="slider-cards" style={{ width: "50px" }}>
            <div className="profile-card">
              <div className="Profile-card-p">
                UI/UX designer familiar with new thechnologies to innovate front
                end design of web and mobile responsive applications.
              </div>
              <div className="profile-card-img">
                <img
                  className="profile-img"
                  src={Thiranya}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "75px", margin: "auto" }}
                />
              </div>
              <div
                style={{ textAlign: "center", margin: "10px" }}
                className="profile-card-name"
              >
                Thiranya
              </div>
              <div className="profile-card-desig">web designer</div>
            </div>
          </div>
          <div className="slider-cards" style={{ width: "50px" }}>
            <div className="profile-card">
              <div className="Profile-card-p">
                An wordpress developer & content writter, handling all type of
                plugins to make wordpress site feature rich, good in search
                engine optimization and content writing.
              </div>
              <div className="profile-card-img">
                <img
                  className="profile-img"
                  src={Sairam}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "75px", margin: "auto" }}
                />
              </div>
              <div
                style={{ textAlign: "center", margin: "10px" }}
                className="profile-card-name"
              >
                Sairam
              </div>
              <div className="profile-card-desig">
                wordpress developer & content writter
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
