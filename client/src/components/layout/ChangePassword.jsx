import axios from "axios";
import React from "react";
import { useState } from "react";
// @ts-ignore
import forgetimage from "./images/e5979271df1c8f91a533acd2f593cb78.png";
import Swalfire from "sweetalert";

const ChangePassword = () => {
 
        const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");

  console.log(id, name); // 55 test null

 
 
  const [password, setFormData] = useState("");

    const newuser={
        password,
    };

    console.log(newuser);
  
  let save = async (e) => {
    e.preventDefault();
    console.log(password)
    const res = await axios.post(
      "http://localhost:5000/routes/api/password-reset/" + id + "/" + name,
      newuser
    );
    // console.log(res.data(password));
    console.warn(res);
      
    const newUser = {
      password,
    };
    try {
      console.log(newUser);
      const body = JSON.stringify(newUser);
      console.log(body);
      const config = {
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
    
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
              type="password"
              name="password"
              value={password}
              //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
              onChange={(e) => setFormData(e.target.value)}
              required
            />
            <label>Enter Your Password</label>
          </div>
          {/* <div className="field">
            <input
              type="cpassword"
              name="cpassword"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
              onChange={(e) => onChange(e)}
              required
            />
            <label>Enter Your Confirm Password</label>
          </div> */}

          <div className="field" id="myBtn">
            <input type="submit" name="submit" value="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;