import React from "react";
// @ts-ignore
import forgetimage from "./images/e5979271df1c8f91a533acd2f593cb78.png";

const ForgetPassword = () => {
  return (
    <>
      <div
        className="wrapper"
        style={{
          marginTop: "90px",
          marginBottom: "70px",
          left: "50%",
          top: "50%",
          transform: "translate(97%, 1%)",
        }}
      >
        <div className="title">
          <img src={forgetimage} alt="" width="100px" />
        </div>
        <form action="#" method="post">
          <div className="field">
            <input
              type="email"
              name="email"
              pattern="^.*[0-9]+.*@.*\..*$"
              required
            />
            <label>Enter Your Email Address</label>
          </div>

          <div className="field" id="myBtn">
            <input type="submit" name="submit" value="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
