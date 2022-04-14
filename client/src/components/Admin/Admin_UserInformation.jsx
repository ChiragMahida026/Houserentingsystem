import React, { Component, useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

//For API Requests
import axios from "axios";

function Admin_UserInformation() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    axios.get("/dashadmin/routes/api/viewallprofile/", config).then((res) => {
      setUser(res.data.data);
      console.log(res);
      console.log(res.data.data);
    });
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $("#exampledemos").DataTable();
      }, 1000);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Datatable HTML
  return (
    <div className="MainDiv">
      <div className="jumbotron text-center">
        <h3>Show All User Information</h3>
      </div>

      <div className="container">
        <table id="example" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Conatct</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data) => {
              return (
                <tr>
                  <td>{data.c_name}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Admin_UserInformation;
