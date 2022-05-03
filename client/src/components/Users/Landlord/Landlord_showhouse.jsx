//localhost:5000/dashadmin/routes/api/viewhouse/getuserid?userid=62500fc1aa47c4737d1c6a58
import React, {  useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

//Datatable Modules
// import $ from "jquery";

//For API Requests
import axios from "axios";
import swal from "sweetalert";

function Admin_houseinfo() {
  let localids = localStorage.getItem("Landlord_id");

  const [user, setUser] = useState([]);
  const [query, setquery] = useState("");

  const fetchData = () => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    axios.get("routes/api/viewprofile", config).then((res) => {
      console.log(res);
      console.log(res.data.data._id);
      localStorage.setItem("Landlord_id", res.data.data._id);
    });

    axios
      .get("routes/api/viewhouse/getuserid?userid=" + localids, config)
      .then((response) => {
        // localStorage.setItem("Landlord_idsss", response.data.data._id);
        setUser(response.data.data);
        console.log("set data" + response);
        console.log("ids" + response.data.data);
      });
    //initialize datatable
  };
  useEffect(() => {
    fetchData();
  }, []);

  function setdelete() {
    var x = localStorage.getItem("Landlord_id");
    console.log("fjkhfksj" + x);
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    const res = axios.get("routes/api/deletehouse?userid=" + x, config);
    if (res) {
      swal({
        title: "SuccessFully Deleted House",
        // text: "I will close in 2 seconds.",
        timer: 1000,
        icon: "success",
        // @ts-ignore
        button: false,
      });
    }
    window.location.reload();
  }
  //Datatable HTML
  return (
    <div className="MainDiv">
      <div className="jumbotron text-center" style={{ marginTop: "50px" }}>
        <h3>Show all house details</h3>
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
              <th>Delete House</th>
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
                    <td>
                      <input
                        style={{ backgroundColor: "coral" }}
                        type="button"
                        className="button"
                        value="Delete House"
                        onClick={setdelete}
                      />
                    </td>
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
