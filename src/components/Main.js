import React from "react";

import graphicdesign from "../imgs/graphic_designing.svg";
import webdev from "../imgs/web_dev.svg";
import digitalmarketting from "../imgs/digital_marketing.svg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit autem debitis eaque dolorum minima dicta hic ea.
              Omnis, odit? Quam harum pariatur unde optio explicabo porro illo
              neque voluptatum natus?Quaerat numquam voluptatum quia
            </p>
            <div className="learn-more">
              <Link to="/services/webdev">learn more</Link>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={graphicdesign} alt="Graphic designing " />
              <span>graphic designing</span>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit autem debitis eaque dolorum minima dicta hic ea.
              Omnis, odit? Quam harum pariatur unde optio explicabo porro illo
              neque voluptatum natus?Quaerat numquam voluptatum quia
            </p>
            <div className="learn-more">
              <Link to="/services/graphicdesign">learn more</Link>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={digitalmarketting} alt="Digital marketing" />
              <span>digital marketing</span>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit autem debitis eaque dolorum minima dicta hic ea.
              Omnis, odit? Quam harum pariatur unde optio explicabo porro illo
              neque voluptatum natus?Quaerat numquam voluptatum quia
            </p>
            <div className="learn-more">
              <Link to="/services/digitalmarketting">learn more</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
