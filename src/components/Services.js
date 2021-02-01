import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import "./services.css";

function Webdev() {
  return (
    <div>
      <h1>webdevelopment</h1>
      <p>
        Our developers will design an attractive and user friendly websites for
        you and that will surely liked by the customers or clients who are using
        it. This is the most important one that every website owner needs."We
        make it for you". We designs all type of websites in your preferred
        mode.
      </p>
    </div>
  );
}

function Webhost() {
  return (
    <div>
      <h1>web Hosting</h1>
      <p>
        The world is in our palm. Out of the internet evolution, everyone wants
        to stand first in the competition. Now the tug of war happens not
        physically only by digitalization. Walk-in marketing is overridden with
        digital marketing.
      </p>
    </div>
  );
}
function Graphicdesign() {
  return (
    <div>
      <h1>graphicdesign</h1>
      <p>
        As face is the index of our mind means Logo's are the index of your
        business. That will be like addibg creativity to your Triumph. Our
        designers will design an creative and beautiful Logo's, Brouchers and
        Posters as you need for your business.
      </p>
    </div>
  );
}
function Seo() {
  return (
    <div>
      <h1>seo </h1>
      <p>
        The world is in our palm. Out of the internet evolution, everyone wants
        to stand first in the competition. Now the tug of war happens not
        physically only by digitalization. Walk-in marketing is overridden with
        digital marketing. People scrutiny everything before investing on
        anything like the firm's reputation, existence, credibility and their
        clients. Based on those only they contact the firm for any dealing. Such
        an importance is allied with a website. A firm might lose its business
        and establishment if it fails to own a website. We at Synovers, the
        professionals work behind every web design intensively. By understanding
        the clients' requisites, developing creative, quality websites energize
        our clients to add-on customization on the basis of their future
        requirements.
      </p>
    </div>
  );
}
function Digitalmarketting() {
  return (
    <div>
      <h1>digitalmarketting</h1>
      <p>
        For every business, there should be an marketing team to promote it. We
        do it for you on online. We promote your business in all the ways that
        make it engaging to all the people across the world through online.
      </p>
    </div>
  );
}
function Wordpress() {
  return (
    <div>
      <h1>wordpress </h1>
      <p>
        The world is in our palm. Out of the internet evolution, everyone wants
        to stand first in the competition. Now the tug of war happens not
        physically only by digitalization. Walk-in marketing is overridden with
        digital marketing. People scrutiny everything before investing on
        anything like the firm's reputation, existence, credibility and their
        clients. Based on those only they contact the firm for any dealing. Such
        an importance is allied with a website. A firm might lose its business
        and establishment if it fails to own a website. We at Synovers, the
        professionals work behind every web design intensively. By understanding
        the clients' requisites, developing creative, quality websites energize
        our clients to add-on customization on the basis of their future
        requirements.
      </p>
    </div>
  );
}

function Services() {
  return (
    <div>
      <div className="services-div">
        <div className="services-menu">
          <ul>
            <Link className="menu-links" to="/services/webhost">
              <li>web Hosting</li>
            </Link>
            <Link className="menu-links" to="/services/graphicdesign">
              <li>Graphic designing</li>
            </Link>
            <Link className="menu-links" to="/services/seo">
              <li>SEO/SMO/SEM</li>
            </Link>
            <Link className="menu-links" to="/services/digitalmarketting">
              <li>digital Marketting</li>
            </Link>
            <Link className="menu-links" to="/services/wordpress">
              <li>Wordpress Sites</li>
            </Link>
            <Link className="menu-links" to="/services/webdev">
              <li>web develoment</li>
            </Link>
          </ul>
        </div>
        <div className="services-main">
          <Switch>
            <Route
              path="/services/webdev"
              exact={true}
              component={Webdev}
            ></Route>
            <Route path="/services/webhost" component={Webhost}></Route>
            <Route
              path="/services/graphicdesign"
              component={Graphicdesign}
            ></Route>
            <Route path="/services/seo" component={Seo}></Route>
            <Route
              path="/services/digitalmarketting"
              component={Digitalmarketting}
            ></Route>
            <Route path="/services/wordpress" component={Wordpress}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Services;
