import React from "react";
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="page-footer"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="bg-success">
        <div className="container">
          <div className="row py-4 d-flex align-items-center"></div>
        </div>
      </div>

      <div className="container text-center text-md-left mt-5">
        <div className="row">
          <div className="col-md-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">About Us </h6>
            <hr
              className="bg-success mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "125px", height: "2px" }}
            />
            <p className="mt-2">Though Our system</p>
            <p className="mt-2">
              Is Searching in Based on the Apartment House for rent in
              metropolitan cities.
            </p>
          </div>

          <div className="col-md-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="bg-success mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "75px", height: "2px" }}
            />
            <ul className="list-unstyled">
              <li className="my-2">
                <FaHome />
                &nbsp; Bardoli,394601,India
              </li>
              <li className="my-2">
                <FaEnvelope />
                &nbsp; rentalhousecd@gmail.com
              </li>
              <li className="my-2">
                <FaPhoneAlt />
                &nbsp; + 91 95748-37724
              </li>
              <li className="my-2">
                <FaPhoneAlt />
                &nbsp; + 91 95863-98482
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <p>
          &copy; Copyright @
          <Link to="#" style={{ color: "white" }}>
            Rommies.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;