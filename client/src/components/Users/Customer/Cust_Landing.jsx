// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swalfire from "sweetalert2";

function Cust_Landing() {
  const [user, setUser] = useState([]);
  const [query, setquery] = useState("");

  const fetchData = () => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    axios.get("routes/api/viewhouse/all ", config).then((response) => {
      // console.log(response);
      console.log(response.data.data);
      setUser(response.data.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  function set2() {
    // Swalfire.fire({
    //   title: "Somthing Wrong!",
    //   icon: "error",
    //   html: "Login First",
    // });
  }

  return (
    <div className="clearfix" style={{ padding: "50px" }}>
      <div className="md-form mt-0">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          style={{ marginBottom: "2%" }}
          onChange={(e) => setquery(e.target.value)}
        />
      </div>
      <div className="row">
        {user
          .filter(
            (data) =>
              data.description.toLowerCase().includes(query) ||
              data.house_type.toLowerCase().includes(query) ||
              data.address.toLowerCase().includes(query)
          )
          .map((data) => (
            <div className="col-md-4 animated fadeIn" key={data._id}>
              <div className="card" style={{ width: "unset" }}>
                <div className="card-body">
                  <div className="avatar">
                    <img src={data.Image1} className="card-img-top" alt="" />
                  </div>
                  <h5 className="card-title">
                    {"House Description : " + data.description + " "}
                  </h5>
                  <h5>{"House Price : " + data.price + "₹"}</h5>
                  <p className="card-text">
                    {"House Type : " + data.house_type}
                    <br />
                  </p>
                  <p className="card-text">
                    {"Address : " + data.address}
                    <br />
                  </p>
                  <center>
                    <input
                      type="button"
                      name="OTP"
                      className="btn btn-primary"
                      value="Show House"
                      id="boton2"
                      // style={{ display: "none" }}
                      onClick={set2}
                    />
                  </center>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cust_Landing;
