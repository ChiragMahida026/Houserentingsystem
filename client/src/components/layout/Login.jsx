import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../layout/css/Logincss.css";
// @ts-ignore
import logo from "../layout/images/34fe7f92-8594-40be-b689-a0c3ea8af779-Security.webp";
// @ts-ignore
import bg from "../layout/images/94-948582_light-colorful-background-hd.jpg";

const Login = () => {
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = fromData;

  const onChange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  let save = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
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
      const res = await axios.post("routes/api/auth", body, config);
      if (res.status === 200) {
        window.location.href = "/";
      } else {
        //put alert
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <>
      <div
        className="container1"
        style={{ position: "relative", textAlign: "center", color: "white" }}
      >
        <img src={bg} alt="Snow" style={{ width: "100%", opacity: "0.76" }} />

        <div
          className="centered"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="slider-btn" style={{ position: "initial" }}>
            <div id="body1">
              <div className="wrapper">
                <div className="title">
                  <img src={logo} alt="" width="66%" />
                </div>
                <form
                  action="../../../../routes/api/auth"
                  method="post"
                  onSubmit={save}
                >
                  <div className="field">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      pattern="^[a-z\.0-9]{6,30}@.+\..+$"
                      required
                    />
                    <label>Email Address</label>
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      pattern="^.{6,}$"
                      required
                    />
                    <label>Password(Atleast 6 characters)</label>
                  </div>
                  <div className="content">
                    <div className="checkbox">
                      <input type="checkbox" name="rem" id="remember-me" />
                      <label>Remember me</label>
                    </div>
                    <div className="pass-link">
                      <Link to="#">Forgot password?</Link>
                    </div>
                  </div>
                  <div className="field">
                    <input type="submit" name="login" value="Login" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
