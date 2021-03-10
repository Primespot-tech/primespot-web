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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, nobis deserunt obcaecati quo sequi nam placeat optio
                iste dolorem aspernatur! Explicabo suscipit, quibusdam soluta
                libero non a blanditiis quod nisi.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, nobis deserunt obcaecati quo sequi nam placeat optio
                iste dolorem aspernatur! Explicabo suscipit, quibusdam soluta
                libero non a blanditiis quod nisi.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, nobis deserunt obcaecati quo sequi nam placeat optio
                iste dolorem aspernatur! Explicabo suscipit, quibusdam soluta
                libero non a blanditiis quod nisi.
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
