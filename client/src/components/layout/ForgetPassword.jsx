import axios from "axios";
import React from "react";
import { useState } from "react";
// @ts-ignore
import forgetimage from "./images/e5979271df1c8f91a533acd2f593cb78.png";
import Swalfire from "sweetalert";
import request from "request";
import ChangePassword from "./ChangePassword";

const ForgetPassword = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");

  console.log(id, name); // 55 test null

  const [fromData, setFormData] = useState({
    email: "",
  });

  const { email } = fromData;

  const onChange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  let save = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
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
      const res = await axios.post("routes/api/password-reset", body, config);
      // console.log(res);

      // console.log("Hellos");
      if (res.status === 200) {
        Swalfire({
          title: "Forget Password Link Send To Your Email!",
          icon: "success",
        });

        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("Userid="))
          .split("=")[1];

        const cookieValue2 = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          .split("=")[1];

        console.log(cookieValue);
        console.log(cookieValue2);

        window.location.href = "/changepassword";
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <>
      <div
        className="wrapper"
        style={{
          marginTop: "90px",
          marginBottom: "70px",
          left: "50%",
          top: "50%",
          transform: "translate(152%, 1%)",
        }}
      >
        <div className="title">
          <img src={forgetimage} alt="" width="100px" />
        </div>
        <form method="post" onSubmit={save}>
          <div className="field">
            <input
              type="email"
              name="email"
              // pattern="^.*[0-9]+.*@.*\..*$"
              onChange={(e) => onChange(e)}
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
};;

export default ForgetPassword;
