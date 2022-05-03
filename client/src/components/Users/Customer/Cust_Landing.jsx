// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
// import Swalfire from "sweetalert2";

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
    <div id="cards_landscape_wrap-2">
      <div class="container">
        <div className="md-form mt-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            style={{ marginBottom: "2%" }}
            onChange={(e) => setquery(e.target.value)}
          />
        </div>
        <div class="row">
          {user
            .filter(
              (data) =>
                data.description.toLowerCase().includes(query) ||
                data.house_type.toLowerCase().includes(query) ||
                data.address.toLowerCase().includes(query)
            )
            .map((data) => (
              <div
                class="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                key={data.roomie_id}
              >
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={data.Image1} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>{"₹" + data.price}</h6>
                      <p>{data.description}</p>
                      <br />
                      <input
                        type="button"
                        value="Rent House"
                        className="btn btn-dark"
                        id="boton2"
                        // style={{ display: "none" }}
                        onClick={set2}
                      />
                      <br />
                      <br />
                      <i className="fa fa-eye" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Cust_Landing;
