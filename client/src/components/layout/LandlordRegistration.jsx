import React, { useState } from "react";
import axios from "axios";
// @ts-ignore
import img1 from "../layout/images/Zoom_BG5_Cozy-Living-Room.jpg";
// @ts-ignore
import img2 from "../layout/images/8b5d6f32-0406-42c3-b4eb-7d79054bf948-HomeSweetHome.webp";

const LandlordRegistration = () => {
  const [fromData, setFormData] = useState({
    name: "",
    address: "",
    dob: "",
    DDState: "",
    DDCity: "",
    contact: "",
    Identification_Proof: "",
    Identification_Proof_Type: "",
    email: "",
    password: "",
    password2: "",
    otp: "",
  });

  const {
    name,
    address,
    dob,
    DDState,
    DDCity,
    contact,
    Identification_Proof,
    Identification_Proof_Type,
    email,
    password,
    password2,
    otp,
  } = fromData;

  const onChange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  let save = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Password do not match");
    } else {
      const newUser = {
        name,
        address,
        dob,
        DDState,
        DDCity,
        contact,
        Identification_Proof,
        Identification_Proof_Type,
        email,
        password,
        otp,
      };
      try {
        console.log(newUser);
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        console.log(body);
        const res = await axios.post(
          "routes/api/landlord_registration",
          body,
          config
        );
        if (res.status === 200) {
          window.location.href = "/login";
        } else {
          //put alert
        }
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };
  function Set() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("boton1");
    var z = document.getElementById("boton");
    var a = document.getElementById("boton2");
    var b = document.getElementById("boton3");
    // eslint-disable-next-line
    var em = document.getElementById("email");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
    if (b.style.display === "none") {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }
    // eslint-disable-next-line
    const res = axios.get("routes/api/email?email=" + email);
  }
  function set2() {
    // eslint-disable-next-line
    const res = axios.get("routes/api/email?email=" + email);
  }
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
                <h1>Landlord Registration</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        action="../../../../routes/api/landlord_registration"
        method="post"
        className="signup-form"
        onSubmit={save}
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
            <label className="label-title">Full Name </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="enter your Full Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
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
              value={address}
              onChange={(e) => onChange(e)}
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
              min="2001-01-01"
              max="2018-12-31"
              name="dob"
              value={dob}
              onChange={(e) => onChange(e)}
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
                value={DDState}
                onChange={(e) => onChange(e)}
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
                value={DDCity}
                onChange={(e) => onChange(e)}
              >
                <option value="" selected disabled hidden>
                  Select City
                </option>
                <option value="Adilabad">Adilabad</option>{" "}
                <option value="Agra">Agra</option>{" "}
              </select>
            </div>
          </div>
          <div className="horizontal-group">
            <div className="form-group left">
              <label className="label-title">
                Select Identification proof Type
              </label>
              <select
                className="form-input"
                name="Identification_Proof_Type"
                value={Identification_Proof_Type}
                style={{ height: "30px" }}
                onChange={(e) => onChange(e)}
              >
                <option value="" selected disabled hidden>
                  Select Identificatication Proof Type
                </option>
                <option value="Addhar Card">Addhar card</option>
                <option value="Pan Card">PanCard</option>
              </select>
            </div>
            <div className="form-group right">
              <label className="label-title">Upload Identification proof</label>
              <input
                type="file"
                name="Identification_Proof"
                value={Identification_Proof}
                onChange={(e) => onChange(e)}
                id="choose-file"
                accept="application/pdf"
                size={80}
                required
              />
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
              value={contact}
              onChange={(e) => onChange(e)}
              pattern="^[6789][0-9]{9}$"
              required
            />
          </div>
          <div className="form-group">
            <label className="label-title">Email </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="enter your email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              pattern="^[a-z\.0-9]{6,30}@.+\..+$"
              required
            />
          </div>
          <div className="form-group">
            <label className="label-title">Password </label>
            <input
              type="password"
              id="clpass"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              className="form-input"
              pattern="^.{6,}$"
              placeholder="enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label className="label-title">Confirm Password </label>
            <input
              type="password"
              id="clpass2"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              className="form-input"
              pattern="^.{6,}$"
              placeholder="enter your confirm password"
              required
            />
          </div>
          <input
            type="button"
            name="OTP"
            className="btn btn-primary"
            value="Send OTP"
            id="boton"
            style={{ display: "block" }}
            onClick={Set}
          />
          <label
            className="label-title"
            id="boton3"
            style={{ display: "none" }}
          >
            Enter OTP{" "}
          </label>
          <input
            type="text"
            id="myDIV"
            name="otp"
            value={otp}
            onChange={(e) => onChange(e)}
            pattern="^.{6,}$"
            className="form-input"
            style={{ display: "none" }}
          ></input>
          <input
            type="button"
            name="OTP"
            className="btn btn-primary"
            value="Resend OTP"
            id="boton2"
            style={{ display: "none" }}
            onClick={set2}
          />
          <input
            type="submit"
            name="submit"
            className="btn btn-primary"
            value="Submit"
            id="boton1"
            style={{ display: "none", margin: "auto" }}
          />
        </div>
      </form>
    </>
  );
};

export default LandlordRegistration;
