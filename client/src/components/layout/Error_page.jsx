import React from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../layout/css/Errorpage.css";

const Error_page = () => {
  return (
    <div id="error-page">
      <div className="content">
        <h2
          className="header"
          data-text="404"
          style={{ lineHeight: "inherit" }}
        >
          4<i className="fa fa-question-circle fa-spin" />4
        </h2>
        <h4>Opps! Page is under construction</h4>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div className="btns">
          <Link to="/">return home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error_page;
