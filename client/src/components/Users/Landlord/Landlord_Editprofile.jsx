import React, { useEffect, useState } from "react";
import axios from "axios";
// @ts-ignore
import img1 from "../../layout/images/real-estate-website-design-bg.jpg";
// @ts-ignore
import img2 from "../../layout/images/2f12cb22-293c-4a95-81b4-699a909f18c5-Buildingourownhouse.webp";
import "../../layout/css/Regcss.css";
import Swalfire from "sweetalert2";
import swal from "sweetalert";
// import { response } from "express";

const Landlord_Editprofile = () => {
  const [user, setUser] = useState([]);
  const [address, setaddress] = useState("");
  const [c_name, setc_name] = useState("");
  const [contact, setcontact] = useState("");

  const fetchData = () => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    axios
      .get(
        "routes/api/viewprofile?_id=" + localStorage.getItem("Puserids"),
        config
      )
      .then((res) => {
        setUser(res.data.data);
        console.log(res);
        setaddress(res.data.data.address);
        setc_name(res.data.data.c_name);
        setcontact(res.data.data.contact);

        // setaddress(res.data.data.c_name);
        console.log(res.data.data.c_name);
        // console.log(res.data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  let save = async (e) => {
    e.preventDefault();

    const updatenames = {
      c_name,
      address,
      contact,
    };

    try {
      console.log(updatenames);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      const body = JSON.stringify(updatenames);
      console.log(body);
      const res = await axios.patch(
        "/dashcust/routes/api/updateprofile",
        body,
        config
      );
      if (res.status === 200) {
        swal({
          title: "Success",
          // text: "I will close in 2 seconds.",
          timer: 1000,
          icon: "success",
          // @ts-ignore
          button: false,
        });
        // window.location.href = "/login";
      } else {
        //put alert
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };
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
        action="../../../../../routes/api/updateprofile"
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
              name="c_name"
              value={c_name}
              onChange={(e) => setc_name(e.target.value)}
              // pattern="^[a-zA-Z]+ +[a-zA-Z]+$"
              required
            />
          </div>
          <div className="form-group">
            <label className="label-title">City </label>
            <input
              type="text"
              id="address"
              className="form-input"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              name="address"
              required
            />
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
              onChange={(e) => setcontact(e.target.value)}
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

export default Landlord_Editprofile;
