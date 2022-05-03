// @ts-nocheck
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swalfire from "sweetalert";
import "../layout/css/models.css";

function Card() {
  const [user, setUser] = useState([]);
  
  const fetchData = () => {
    axios.get("routes/api/viewhouse/allvisitor ").then((response) => {
      console.log(response);
      console.log(response.data.data);
      setUser(response.data.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  function set2() {
    Swalfire({
      title: "First Login Into System!",
      icon: "error",
    });
  }

  const [Id, setID] = useState("");
  const [Prc, setprc] = useState("");
  const [Img, setimage] = useState("");

  function selectuser(id,pri,IMg) {
    setID(id);
    setprc(pri);
    setimage(IMg);

   
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
                key={data.roomie_id}
              >
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={data.Image1} alt="" />
                    </div>
                    <div className="text-container">
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
                      <i
                        className="fa fa-eye"
                        onClick={() => {
                          selectuser(data._id, data.description,data.Image1);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {/* {Id} */}
                  House Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {Prc}
                <img
                  width="100%"
                  src={Img}
                  alt=""
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Card;
