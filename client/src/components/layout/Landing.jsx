import React from "react";
// @ts-ignore
import img1 from "../layout/images/Zoom_BG9_Stylish-Living-Room.jpg";
import Card from "../layout/Card";
import Getintouch from "../layout/Getintouch";
import "./css/cardcss.css";

const Landing = () => {
  return (
    <>
      <div
        className="background-image-container white-text-container"
        style={{
          backgroundImage: "url(" + img1 + ")",
          backgroundPosition: "bottom",
        }}
      >
        <div className="overlay"></div>
        <div className="containser">
          <div className="row">
            <div className="col-xs-12">
              <h1>Welcome To!Roomies</h1>
              <p className="">A HOME CHANGES EVERYTHING.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 section-container-spacer">
              <h2 className="text-center">Discover our Features</h2>

              <hr
                style={{
                  margin: "revert",
                  border: "2px solid cyan",
                  width: "20%",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="fa-container">
                <i className="fa fa-comment fa-3x" aria-hidden="true"></i>
              </div>
              <h3 className="text-center">Reply</h3>

              <p style={{ textAlign: "center" }}>
                Any type of question you have facing problem to ask messenger
                they reply your question to answer.
              </p>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="fa-container">
                <i className="fa fa-heart fa-3x" aria-hidden="true"></i>
              </div>
              <h3 className="text-center">We Care You</h3>

              <p style={{ textAlign: "center" }}>
                If you facing a problem to direct contact us at the bottom GET
                IN TOUCH to send feedback or else.
              </p>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="fa-container">
                <i className="fa fa-bell fa-3x" aria-hidden="true"></i>
              </div>
              <h3 className="text-center">Notify</h3>

              <p style={{ textAlign: "center" }}>
                If any Job adds To our system and you are related that we notify
                you by mail.
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar" style={{ display: "block" }}>
        <div className="row text-center">
          <div className="text-center">
            <h2
              className="text-center"
              style={{
                color: "darkviolet",
                marginTop: "50px",
                marginBottom: "-40px",
              }}
            >
              Rental House Details
            </h2>
          </div>
        </div>

        <br />
        <br />
        <hr
          style={{
            border: "2px solid blueviolet",
            width: "15%",
            marginTop: "3%",
            margin: "revert",
          }}
        />
        <div className="container d-flex justify-content-center">
          <div className="App">
            <div className="container">
              <Card />
            </div>
          </div>
        </div>
      </nav>

      <Getintouch/>
    </>
  );
};

export default Landing;
