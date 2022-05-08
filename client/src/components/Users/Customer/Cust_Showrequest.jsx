import axios from "axios";
import React, { useState, useEffect } from "react";
import Swalfire from "sweetalert";
import "../../layout/css/models.css";


function Cust_Showrequest() {
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
        "/routes/api/requesthome/getuserid?customer_id=" +
          localStorage.getItem("Puserids"),
        config
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.data);
        setUser(response.data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);



  function set2(id) {
    //   setID(id);
         setID(id);
          setID(id);
      console.log({id});

       const newUser = {
         id,
       };

        const config = {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        };


        
        const body = JSON.stringify(newUser);
          const res = axios.get(
            "/routes/api/requesthome/deleteuserid?_id=" + id,
            // body
            config
          );
        if (res) {
          console.log("Hellof");
          window.location.reload();
        } else {
          //put alert
        }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleUpdate(e)} method="post">
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {user.map((data) => (
              <div
                className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                key={data._id}
              >
                <div className="card-flyer">
                  <div className="text-box">
                    {/* <div className="image-box"> */}
                      {/* <img src={data._id} alt="" /> */}
                    {/* </div> */}
                    <div className="text-container">
                      <h6>{"₹" + data.price}</h6>
                      {/* <>{console.log(data)};</> */}
                      <br />
                      <input
                        type="button"
                        value=  "Cancle Request"
                        className="btn btn-danger"
                        id="boton2"
                        
                        // style={{ display: "none" }}
                        onClick={() => {
                          set2(
                                data._id
                              );
                        }}
                      />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Cust_Showrequest;
