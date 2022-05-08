 //localhost:5000/dashadmin/routes/api/viewhouse/getuserid?userid=62500fc1aa47c4737d1c6a58
import React, {  useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";

//Datatable Modules
// import $ from "jquery";

//For API Requests
import axios from "axios";
import swal from "sweetalert";

function Landlord_Showrequest() {
  const [user, setUser] = useState([]);
  const [Id, setID] = useState("");

  //  setID(Id);

  //  console.log(setID(Id));

  const fetchData = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    axios
      .get(
        "/routes/api/requesthome/landlorduserid?Landlord_id=" +
          localStorage.getItem("Puserids"),
        config
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.data);

        if (response.data.data.response != 0) {
          setUser(response.data.data);
        } else {
          console.log("Hellos");
        }
        //get the response and do operation
      });

    //get the response and do operation

    //   if(res)
    //   {
    //       const reqqw = axios.get(
    //         "/routes/api/requesthome/getuserid?customer_id=" +
    //           localStorage.getItem("Puserids"),
    //         config
    //       );
    //   }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function sets() {
    var Landlord_id = localStorage.getItem("Puserids");

    const newUser = {
      response: 2,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    const body = JSON.stringify(newUser);
    console.log(body);

    const res = axios.patch("/routes/api/responsehome", body, config);

    if (res) {
      swal({
        title: "Success",
        // text: "I will close in 2 seconds.",
        timer: 1000,
        icon: "success",
        // @ts-ignore
        button: false,
      });
    }
  }

  //Datatable HTML
  return (
    <div className="MainDiv">
      <div className="jumbotron text-center" style={{ marginTop: "50px" }}>
        <h3>Show Request</h3>
      </div>
      <div className="md-form mt-0"></div>

      <div className="container">
        <table id="example" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Landlord Name</th>
              <th>House Description</th>
              <th>Accept Request</th>
              <th>Reject Request</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data) => {
              return (
                <tr key={data._id}>
                  <td>{data.customer_id}</td>
                  <td>{data.Landlord_id}</td>
                  <td>{data.house_id}</td>
                  <td>
                    <input
                      type="button"
                      className="btn btn-primary"
                      value="Accept Request"
                      // onSubmit={sets}
                      // onClick={setdelete}
                    />
                  </td>
                  <td>
                    <input
                      style={{ backgroundColor: "coral" }}
                      type="button"
                      className="btn btn-danger"
                      value="Reject Request"
                      // onClick={setdelete}
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
export default Landlord_Showrequest;
