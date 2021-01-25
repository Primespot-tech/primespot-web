import React, { useState } from "react";
import "./App.css";
import Steppercomp from "./Steppercomp";
import Contactus from "../imgs/Contactus.png";
import Banner from "../imgs/TopImage.jpg";
import graphicdesign from "../imgs/graphic_designing.svg";
import webdev from "../imgs/web_dev.svg";
import digitalmarketting from "../imgs/digital_marketing.svg";
import InnovativeTeam from "../imgs/InnovativeTeam.svg";
import Easybusiness from "../imgs/Easybusiness.svg";
import affordable from "../imgs/affordable.svg";
import Responsive from "../imgs/Responsive.svg";
import quote from "../imgs/quote.svg";
import Quote from "../imgs/Quote.png";
import social_media_icons from "../imgs/social_media_icons.svg";

const burger = document.querySelector(".burger");
const navLinksContainer = document.querySelector(".nav-links-container");
const navLinks = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".nav-container");

const navs = {
  navbarcontainer: {
    position: "fixed",
    fontFamily: "Kanit, sans-serif",
    width: "100%",
    height: "13vh",
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

      <header className="header-container">
        <img className="header-image" src={Banner} alt="Header Image" />

        <div className="overlay"></div>
        <nav style={navs.navbarcontainer} className={navScrollEffect}>
          <div className="logo">
            <a href="#">primespot</a>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">home</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#whyus">why us ?</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#services">services</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">projects</a>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            totam asperiores molestiae error officia animi quis, placeat
            deleniti aliquid ut sequi laborum consequuntur quia nulla eum ab,
            facere nesciunt! Corrupti.Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate totam asperiores molestiae error officia
            animi quis, placeat deleniti aliquid ut sequi laborum consequuntur
            quia nulla eum ab, facere nesciunt! Corrupti.
          </h3>
        </div>
      </header>

      <div className="grid-alignment">
        <section id="#services" className="services">
          <h3>our services</h3>
          <div className="underline"></div>
          <div className="services-cards">
            <div className="card">
              <div className="card-heading">
                <img src={webdev} alt="Web Development Image" />
                <span>web development</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit autem debitis eaque dolorum minima dicta hic ea.
                Omnis, odit? Quam harum pariatur unde optio explicabo porro illo
                neque voluptatum natus?Quaerat numquam voluptatum quia
                exercitationem libero a dolor sunt, ea, expedita optio aliquam
                natus officia inventore blanditiis amet doloremque fugit! Et,
                ipsum? Nam sunt labore earum magni perferendis. Excepturi,
                dolore.
              </p>
              <div className="learn-more">
                <a href="#">learn more</a>
              </div>
            </div>
            <div className="card">
              <div className="card-heading">
                <img src={graphicdesign} alt="Graphic designing Image" />
                <span>graphic designing</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit autem debitis eaque dolorum minima dicta hic ea.
                Omnis, odit? Quam harum pariatur unde optio explicabo porro illo
                neque voluptatum natus?Quaerat numquam voluptatum quia
                exercitationem libero a dolor sunt, ea, expedita optio aliquam
                natus officia inventore blanditiis amet doloremque fugit! Et,
                ipsum? Nam sunt labore earum magni perferendis. Excepturi,
                dolore.
              </p>
              <div className="learn-more">
                <a href="#">learn more</a>
              </div>
            </div>
            <div className="card">
              <div className="card-heading">
                <img src={digitalmarketting} alt="Digital marketing Image" />
                <span>digital marketing</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit autem debitis eaque dolorum minima dicta hic ea.
                Omnis, odit? Quam harum pariatur unde optio explicabo porro illo
                neque voluptatum natus?Quaerat numquam voluptatum quia
                exercitationem libero a dolor sunt, ea, expedita optio aliquam
                natus officia inventore blanditiis amet doloremque fugit! Et,
                ipsum? Nam sunt labore earum magni perferendis. Excepturi,
                dolore.
              </p>
              <div className="learn-more">
                <a href="#">learn more</a>
              </div>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, nobis deserunt obcaecati quo sequi nam placeat optio
                iste dolorem aspernatur! Explicabo suscipit, quibusdam soluta
                libero non a blanditiis quod nisi.
              </p>
            </div>
          </div>
          <div className="why-us-content-light">
            <div className="internal-why-us">
              <h3>easy business takeoff</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, nobis deserunt obcaecati quo sequi nam placeat optio
                iste dolorem aspernatur! Explicabo suscipit, quibusdam soluta
                libero non a blanditiis quod nisi.
              </p>
            </div>
            <img src={Easybusiness} alt="Easy business takeoff" />
          </div>
          <div className="why-us-content-dark">
            <img src={affordable} alt="Affordable prize" />
            <div className="internal-why-us">
              <h3>Affordable Prize</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, nobis deserunt obcaecati quo sequi nam placeat optio
                iste dolorem aspernatur! Explicabo suscipit, quibusdam soluta
                libero non a blanditiis quod nisi.
              </p>
            </div>
          </div>
          <div className="why-us-content-light">
            <div className="internal-why-us">
              <h3>Responsive design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, nobis deserunt obcaecati quo sequi nam placeat optio
                iste dolorem aspernatur! Explicabo suscipit, quibusdam soluta
                libero non a blanditiis quod nisi.
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

        <section className="technologies">
          <div className="title">
            <h4>technologies we use</h4>
            <div className="underline"></div>
          </div>
          <div className="tech-images">
            <img src={Banner} alt="Mongo DB" />
            <img src={Banner} alt="Node js" />
            <img src={Banner} alt="Material UI" />
            <img src={Banner} alt="React" />
          </div>
        </section>
        {/*---------------------------------contact us ---------------*/}
        <section id="contactus" className="stepper">
          <div className="title">
            <h4>Get your business to next level in 3 steps..</h4>
            <div className="underline"></div>
          </div>
          <Steppercomp className="steppercomp" />
        </section>

        <section className="contact-us">
          <img src={Contactus} alt="Contact us" />
          <div className="contact-overlay"></div>
          <h4>Planning to develop your business ?</h4>
          <div className="contact-heading">
            <p>contact us</p>
            <div className="underline"></div>
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
              <img src={social_media_icons} alt="Icons" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
