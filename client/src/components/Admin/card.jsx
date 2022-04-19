import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../layout/css/Adminslide.css";

function card(props) {
  function set() {
    localStorage.clear();
    const res = axios.get("routes/api/logout");
    if (res) {
      console.log("done logout");
      window.location.href = "/login";
    }
  }
  return (
    <>
      {" "}
      <body id="body-pd">
        <header className="header" id="header">
          <div className="header_toggle">
            {" "}
            <i className="bx bx-menu" id="header-toggle"></i>{" "}
          </div>
          <div className="header_img">
            {" "}
            <img
              src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
              alt=""
            />{" "}
          </div>
        </header>
        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              {" "}
              <Link to="/dashadmin" className="nav_logo">
                <i className="bx bx-layer nav_logo-icon"></i>
                <span className="nav_logo-name">Welcome! Admin</span>
              </Link>
              <div className="nav_list">
                <Link to="/dashadmin" className="nav_link active">
                  <i className="bx bx-grid-alt nav_icon"></i>
                  <span className="nav_name">Dashboard</span>
                </Link>
                <Link to="userinformation" className="nav_link">
                  <i className="bx bx-user nav_icon"></i>{" "}
                  <span className="nav_name">User Information</span>
                </Link>
                <Link to="houseinformation" className="nav_link">
                  <i className="fa fa-home nav_icon"></i>{" "}
                  <span className="nav_name">House Information</span>
                </Link>
                <Link to="/dashadmin" className="nav_link">
                  <i className="bx bx-message-square-detail nav_icon"></i>
                  <span className="nav_name">All Request</span>{" "}
                </Link>
                <Link to="Addhouse" className="nav_link">
                  <i className="bx bx-bookmark nav_icon"></i>
                  <span className="nav_name">Add House</span>
                </Link>
              </div>
            </div>
            <div className="nav_link" onClick={set}>
              <i className="bx bx-log-out nav_icon"></i>
              <span className="nav_name">SignOut</span>
            </div>
          </nav>
        </div>
        <div
          className="height-100 bg-light"
          style={{ marginTop: "30px", marginLeft: "78px" }}
        >
          <Outlet />
        </div>
      </body>
    </>
  );
}

export default card;
