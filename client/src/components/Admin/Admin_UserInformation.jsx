import React, {  useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

//Datatable Modules
// import $ from "jquery";

//For API Requests
import axios from "axios";

function Admin_UserInformation() {
  const [user, setUser] = useState([]);
  const [query, setquery] = useState("");

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
              <th>Name</th>
              <th>Email</th>
              <th>Conatct</th>
            </tr>
          </thead>
          <tbody>
            {user
              .filter(
                (data) =>
                  data.c_name.toLowerCase().includes(query) ||
                  data.email.toLowerCase().includes(query) ||
                  data.contact.toLowerCase().includes(query)
              )
              .map((data) => {
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
