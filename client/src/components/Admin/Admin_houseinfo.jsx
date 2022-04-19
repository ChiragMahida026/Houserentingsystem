import React, { Component, useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import $ from "jquery";

//For API Requests
import axios from "axios";

function Admin_houseinfo() {
  const [user, setUser] = useState([]);
  const [query, setquery] = useState("");

  const fetchData = () => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    axios.get("/dashadmin/routes/api/viewhouse/all", config).then((res) => {
      setUser(res.data.data);
      console.log(res);
      console.log(res.data.data);
    });
    //initialize datatable
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Datatable HTML
  return (
    <div className="MainDiv">
      <div className="jumbotron text-center" style={{ marginTop: "50px" }}>
        <h3>Show All User Information</h3>
      </div>
      <div className="md-form mt-0">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          style={{ marginBottom: "2%" }}
          onChange={(e) => setquery(e.target.value)}
        />
      </div>

      <div className="container">
        <table id="example" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>House Description</th>
              <th>House Price</th>
              <th>House Type</th>
            </tr>
          </thead>
          <tbody>
            {user
              .filter(
                (data) =>
                  data.description.toLowerCase().includes(query) ||
                  data.house_type.toLowerCase().includes(query) ||
                  data.address.toLowerCase().includes(query)
              )
              .map((data) => {
                return (
                  <tr key={data._id}>
                    <td>{data.description}</td>
                    <td>{data.price}</td>
                    <td>{data.house_type}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Admin_houseinfo;
