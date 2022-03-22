import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import Service from "./components/layout/Service";
import Navbar from "./components/layout/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nicesnippets.com/upload/thumbnail/month.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>NiceSnippets.com slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nicesnippets.com/upload/thumbnail/year.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>NiceSnippets.com slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nicesnippets.com/upload/thumbnail/footer-social-icon-design-example-using-bootstrap-4.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>NiceSnippets.com slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
