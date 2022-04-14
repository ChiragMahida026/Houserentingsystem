import React, { useEffect, useState } from "react";
import axios from "axios";
// @ts-ignore
import img1 from "../../layout/images/real-estate-website-design-bg.jpg";
// @ts-ignore
import img2 from "../../layout/images/2f12cb22-293c-4a95-81b4-699a909f18c5-Buildingourownhouse.webp";
import "../../layout/css/Regcss.css";
// import { response } from "express";

const CustomerRegistration = () => {
  const [user, setUser] = useState([]);

  const config = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  // const fetchData = () => {
  const res = axios.get("routes/api/viewprofile", config);
  console.log(res);
  // };

  return (
    <>
      <div className="child">
        <div
          className="background-image-container white-text-container"
          style={{
            backgroundImage: "url(" + img1 + ")",
            zIndex: "-1",
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>Edit Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        action="../../../../routes/api/customer_registration"
        method="post"
        className="signup-form"
        // onSubmit={save}
        style={{ backgroundColor: "White", width: "60%", marginTop: "-150px" }}
      >
        <div className="form-header">
          <h1>
            <img src={img2} alt="" width="40%;" />
          </h1>
        </div>

        <div
          className="form-body"
          style={{ margin: "inherit", marginTop: "-10%" }}
        >
          <div className="form-group">
            <label className="label-title">Name </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="enter your Full Name"
              name="name"
              //   value={name}
              //   onChange={(e) => onChange(e)}
              // pattern="^[a-zA-Z]+ +[a-zA-Z]+$"
              required
            />
          </div>
          <div className="form-group">
            <label className="label-title">Address</label>
            <textarea
              className="form-input"
              placeholder="enter your Address"
              rows={4}
              cols={50}
              name="address"
              //   value={address}
              //   onChange={(e) => onChange(e)}
              minLength={5}
              maxLength={250}
              style={{ height: "auto", resize: "none" }}
            ></textarea>
          </div>
          <div className="form-group ">
            <label className="label-title">Date Of Birth </label>
            <input
              type="Date"
              className="form-input"
              name="dob"
              //   value={dob}
              //   onChange={(e) => onChange(e)}
              max={1999}
              required
            />
          </div>
          &ensp;&emsp;
          <div className="horizontal-group">
            <div className="form-group left">
              <label className="label-title">Select State</label>
              <select
                name="DDState"
                className="form-input"
                id="DDState"
                // value={DDState}
                // onChange={(e) => onChange(e)}
              >
                <option value="" selected disabled hidden>
                  Select State
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
            </div>
            <div className="form-group right">
              <label className="label-title">Select City</label>
              <select
                name="DDCity"
                className="form-input"
                id="DDCity"
                // value={DDCity}
                // onChange={(e) => onChange(e)}
              >
                <option value="" selected disabled hidden>
                  Select City
                </option>
                <option value="Adilabad">Adilabad</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="label-title">Contact No</label>
            <input
              type="text"
              maxLength={10}
              placeholder="enter your contact no"
              className="form-input"
              name="contact"
              //   value={contact}
              //   onChange={(e) => onChange(e)}
              pattern="^[6789][0-9]{9}$"
              required
            />
          </div>
          <input
            type="submit"
            name="submit"
            className="btn btn-primary"
            value="Update"
            id="boton1"
            // style={{ display: "none", margin: "auto" }}
          />
        </div>
      </form>
    </>
  );
};

export default CustomerRegistration;
