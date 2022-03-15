// @ts-nocheck
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

const App = () => {
  return (
    <>
      
        <Route exact path="/" component={Navbar} />
        <Route path="/landing" component={Landing} />
      
    </>
  );
}

export default App;
