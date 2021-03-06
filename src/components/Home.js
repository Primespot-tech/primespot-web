import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sliders from "./Slider";

import "./App.css";
import Steppercomp from "./Steppercomp";
import Contactus from "../imgs/Contactus.png";
import Banner from "../imgs/TopImage.jpg";
import InnovativeTeam from "../imgs/InnovativeTeam.svg";
import Easybusiness from "../imgs/Easybusiness.svg";
import affordable from "../imgs/affordable.svg";
import Responsive from "../imgs/Responsive.svg";
import quote from "../imgs/quote.svg";
import Quote from "../imgs/Quote.png";

import graphicdesign from "../imgs/graphic_designing.svg";
import webdev from "../imgs/web_dev.svg";
import digitalmarketting from "../imgs/digital_marketing.svg";

import Logo from "../imgs/Logo.png";
import Materialui from "../imgs/MaterialUi.jpg";
import Mongodb from "../imgs/MongoDb.jpg";
import Node from "../imgs/NodeJS.jpg";
import Reactimg from "../imgs/React.jpg";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";

const burger = document.querySelector(".burger");
const navLinksContainer = document.querySelector(".nav-links-container");
const navLinks = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".nav-container");

const navs = {
  navbarcontainer: {
    position: "fixed",
    fontFamily: "Kanit, sans-serif",
    width: "100%",
    height: "20vh",
    top: "0%",
    zIndex: 5,
    display: "flex",
    justifyContent: "space-around",
    /* padding: 0rem 1rem; */
    alignItems: "center",
    minHeight: "10vh",
    backgroundColor: "rgba(27, 34, 54, 0.5)",
    transition: "background-color 0.2s ease",
  },
  navactive: {
    transform: "translateX(0%)",
  },
};

function MenuIcon() {
  return (
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  );
}
function CloseMenu() {
  return (
    <div class="burger cross">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  );
}

function Home() {
  const [navScrollEffect, setnavScrollEffect] = useState("navbar-container");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      {
        (window.onscroll = function () {
          if (this.scrollY > 10) {
            setnavScrollEffect("nav-scrolled");
          } else {
            setnavScrollEffect("navbar-container");
          }
        })
      }

      {/*---------------------------------header-----------------------*/}

      <header className="header-container">
        <img className="header-image" src={Banner} alt="Primespot Banner" />
        <div className="overlay"></div>

        <nav style={navs.navbarcontainer} className={navScrollEffect}>
          <div className="logo">
            <a href="/">
              <img src={Logo} />
            </a>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/">home</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#whyus">why us ?</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/services">services</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/">projects</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#contactus">contact Us</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </nav>

        <div className="header-text">
          <h1>PRIMESPOT.TECH</h1>
          <h3>
            PrimeSpot is a team of Web and Graphic Designers, Web Developers and
            Digital Marketers who are enriched in all the technologies that an
            IT project needs. We keep on learning the new technologies which are
            needed to meet the business requirements to improve the strategy of
            the business. We create an creative and innovative designs which is
            most liked by others to get impress on your business. And we help
            you in marketing your business on online also to reach a good level.
          </h3>
        </div>
      </header>

      <div className="grid-alignment">
        {/*-----------------------services------------------------------*/}

        <section id="#services" className="services">
          <h3>our services</h3>
          <div className="underline"></div>
          <div className="services-cards">
            <div className="card">
              <div className="card-heading">
                <img src={webdev} alt="Web Development" />
                <span>web development</span>
              </div>
              <p>
                Our developers will design an attractive and user friendly
                websites for you and that will surely liked by the customers or
                clients who are using it. This is the most important one that
                every website owner needs. "We make it for you". We designs all
                type of websites in your preferred mode.
              </p>
              {/* <div className="learn-more">
                <Link to="/services/digitalmarketting">learn more</Link>
            </div>*/}
            </div>
            <div className="card">
              <div className="card-heading">
                <img src={graphicdesign} alt="Graphic designing " />
                <span>graphic designing</span>
              </div>
              <p>
                As face is the index of our mind, Logo's are the index of your
                business. That will be like adding creativity to your Triumph.
                Our designers will design an creative and beautiful Logo's,
                Brouchers and Posters as you need for your business.
              </p>
              {/* <div className="learn-more">
                <Link to="/services/digitalmarketting">learn more</Link>
            </div>*/}
            </div>
            <div className="card">
              <div className="card-heading">
                <img src={digitalmarketting} alt="Digital marketing" />
                <span>digital marketing</span>
              </div>
              <p>
                For every business, there should be an marketing team to promote
                it. We do it for you on online. We promote your business in all
                the ways that make it engaging to all the people across the
                world through online.
              </p>
              {/* <div className="learn-more">
                <Link to="/services/digitalmarketting">learn more</Link>
            </div>*/}
            </div>
          </div>
        </section>

        {/*------------------------why us--------------------------------*/}

        <section id="whyus" className="why-us">
          <h3>why us ?</h3>
          <div className="underline"></div>
          <div className="why-us-content-dark">
            <img src={InnovativeTeam} alt="Innovative Team" />
            <div className="internal-why-us">
              <h3>innovative team</h3>
              <p>
                We are a team with unique developers, designers who are much
                interested in technologies and also in learning and using the
                new technologies. So we provide you an innovative designs which
                are attractive and user friendly to all.
              </p>
            </div>
          </div>
          <div className="why-us-content-light">
            <div className="internal-why-us">
              <h3>Easy business takeoff</h3>
              <p>
                We provide you an SEO friendly designed contents which will make
                your website to stand in the front page of every search engines.
                And that make your presence on inline everything day from which
                customers will reach you easily.
              </p>
            </div>
            <img src={Easybusiness} alt="Easy business takeoff" />
          </div>
          <div className="why-us-content-dark">
            <img src={affordable} alt="Affordable prize" />
            <div className="internal-why-us">
              <h3>Affordable Price</h3>

              <p>
                We make your online price at an affordable price which is an
                nominal price compared to others. We are a team of passionates
                so we want to use our talents in the way that want to help all.
              </p>
            </div>
          </div>
          <div className="why-us-content-light">
            <div className="internal-why-us">
              <h3>Responsive design</h3>
              <p>
                website we design always best suite for mobile , tablet and
                desktop view. Pay for one interface and get your website
                completely responsive for all type of devices with personalized
                interface.
              </p>
            </div>
            <img src={Responsive} alt="Responsive Design" />
          </div>
          <div className="why-us-content-quote">
            <img className="quote-background" src={Quote} alt="Quote" />
            <div className="quote-overlay"></div>
            <img className="thought-svg" src={quote} alt="Elon musk's quote" />
            <div className="quote">
              <h4>Great companies are built on great products</h4>
              <p>Elon musk</p>
            </div>
          </div>
        </section>

        {/*---------------------------------technology-we-use--------------------*/}

        <section className="technologies">
          <div className="title">
            <h4>technologies we use</h4>
            <div className="underline"></div>
          </div>
          <div className="tech-images">
            <img src={Mongodb} alt="Mongo DB" />
            <img src={Node} alt="Node js" />
            <img src={Materialui} alt="Material UI" />
            <img src={Reactimg} alt="React" />
          </div>
        </section>

        {/*---------------------------------contact us ----------------------*/}

        <section id="contactus" className="stepper">
          <div className="title">
            <h4>Get your business to next level in 3 steps..</h4>
            <div className="underline"></div>
          </div>
          <div className="contact-div">
            <Steppercomp className="steppercomp" />
            <div className="sliders-mobile">
              <Sliders />
            </div>
          </div>
        </section>

        <section className="contact-us">
          <img src={Contactus} alt="Contact us" />
          <div className="contact-overlay"></div>
          <h4>Planning to develop your business ?</h4>
          <div className="contact-heading">
            <p>contact us</p>
            <div className="underline"></div>
          </div>
          <div className="contact-div-web">
            <Sliders />
          </div>
          <div className="form">
            <form action="#">
              <input type="text" id="name" placeholder="Your Name" />
              <input type="email" id="mail" placeholder="Your Mail" />
              <input type="text" id="msg" placeholder="Your Message" />
              <input type="submit" value="Send Message" />
            </form>
          </div>

          <div className="contact-footbar">
            <p>Copyrights&#169; primespot-All rights reserved</p>
            <div className="icons">
              <a href="">
                <MailIcon fontSize="large" />
              </a>
              <a href="https://www.facebook.com/Primespot-104921891580743">
                <FacebookIcon fontSize="large" />
              </a>
              <a href="">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="https://www.instagram.com/primespot.tech/">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="">
                <WhatsAppIcon fontSize="large" />
              </a>
              <a className="telegram" href="">
                <TelegramIcon fontSize="large" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
