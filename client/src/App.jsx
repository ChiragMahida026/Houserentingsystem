import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import Service from "./components/layout/Service";
import Navbar from "./components/layout/Navbar";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import CustomerRegistration from "./components/layout/CustomerRegistration";
import Login from "./components/layout/Login";

const App = () => {
  return (
    <>
    <Navbar/>
    <Fragment>
        <Route exact path="/" component={ Landing } />
        <section className="container" >
        
          <Switch>
            <Route exact path="/customerregistration" component={ CustomerRegistration }/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </section>
      </Fragment>
    </>
  );
};

export default App;
