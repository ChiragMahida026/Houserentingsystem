import React from "react";
// @ts-ignore
import img1 from "../layout/images/img-05.jpg";
// @ts-ignore
import img2 from "../layout/images/8b5d6f32-0406-42c3-b4eb-7d79054bf948-HomeSweetHome.webp";

const LandlordRegistration = () => {
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
        className="signup-form"
        action="##"
        method="post"
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
              name="fullName"
              pattern="^[a-zA-Z]+ +[a-zA-Z]+$"
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
              name="Address"
              minLength={5}
              maxLength={250}
              style={{ height: "auto", resize: "none" }}
            ></textarea>
          </div>
          <div className="form-group">
            <label className="label-title">Date Of Birth </label>
            <input
              type="Date"
              className="form-input"
              name="dob"
              max={1999}
              required
            />
          </div>
          &ensp;&emsp;
          <div className="horizontal-group">
            <div className="form-group left">
              <label className="label-title">Select State</label>
              <select name="DDState" className="form-input" id="ddState">
                <option value="" selected disabled hidden>
                  Select State
                </option>
              </select>
            </div>
            <div className="form-group right">
              <label className="label-title">Select City</label>
              <select name="DDCity" className="form-input" id="ddCity">
                <option value="" selected disabled hidden>
                  Select City
                </option>
              </select>
            </div>
          </div>
          <div className="horizontal-group">
            <div className="form-group left">
              <label className="label-title">
                Select Identification proof Type
              </label>
              <input
                type="text"
                maxLength={10}
                placeholder="enter your contact no"
                className="form-input"
                style={{ height: "4% " }}
                name="cnum"
                pattern="^[6789][0-9]{9}$"
                required
              />
            </div>
            <div className="form-group right">
              <label className="label-title">Upload Identification proof</label>
              <input
                type="file"
                name="File"
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
              name="cnum"
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
              pattern="^[a-z\.0-9]{6,30}@.+\..+$"
              required
            />
          </div>
          <div className="form-group">
            <label className="label-title">Password </label>
            <input
              type="password"
              id="clpass"
              name="pass"
              className="form-input"
              pattern="^.{6,}$"
              placeholder="enter your password"
              required
            />
          </div>
          <input
            type="submit"
            name="submit"
            className="btn btn-primary"
            value="Registration"
            id="boton"
          />
        </div>
      </form>
    </>
  );
};

export default LandlordRegistration;
