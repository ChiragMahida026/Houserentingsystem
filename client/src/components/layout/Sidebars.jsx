import React from "react";
import "./css/Admincss.css";

const sidebars = () => {
  return (
    <>
      <ul className="qwerty">
        <li className="class21">
          <a href="#" className="asdf">
            Home
          </a>
        </li>
        <li className="class21">
          <a href="#Userdetails" className="asdf">
            User Details
          </a>
        </li>
        <li className="class21">
          <a href="#Housedetails" className="asdf">
            House Details
          </a>
        </li>
        <li className="class21">
          <a href="#Logout" className="asdf">
            LogOut
          </a>
        </li>
      </ul>
      <section>
        <i className="fa fa-bars"></i>
        <div className="sec1"></div>
        <h2>User Details</h2>
        <p style={{ padding: "0 20px 10px 20px", textAlign: "center" }}>
          User Details Page
        </p>
        <div className="sec2"></div>
        <h2>House Details Section</h2>
        <p style={{ padding: "0 20px 10px 20px", textAlign: "center" }}>
          House Details
        </p>
      </section>
    </>
  );
};

export default sidebars;