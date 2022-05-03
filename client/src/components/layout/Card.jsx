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
  const [Img2, setimage2] = useState("");
  const [Img3, setimage3] = useState("");

  function selectuser(id,pri,IMg,IMg2,IMg3) {
    setID(id);
    setprc(pri);
    setimage(IMg);
    setimage2(IMg2);
    setimage3(IMg3);

   
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
                          selectuser(
                            data._id,
                            data.description,
                            data.Image1,
                            data.Image2,
                            data.Image3
                          );
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
                  House Images
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div
                  id="carousel"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="6000"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <picture>
                        <img
                          srcset={Img}
                          alt="responsive image"
                          className="d-block img-fluid"
                        />
                      </picture>

                      {/* <div className="carousel-caption">
                        <div>
                            <h2>Digital Craftsmanship</h2>
                            <p>We meticously build each site to get results</p>
                            <span className="btn btn-sm btn-outline-secondary">Learn More</span>
                        </div>
                    </div> */}
                    </div>

                    <div className="carousel-item">
                      <picture>
                        <img
                          srcset={Img2}
                          alt="responsive image"
                          className="d-block img-fluid"
                        />
                      </picture>
                    </div>
                    <div className="carousel-item">
                      <picture>
                        <img
                          srcset={Img3}
                          alt="responsive image"
                          className="d-block img-fluid"
                        />
                      </picture>
                    </div>
                  </div>

                  <a
                    className="carousel-control-prev"
                    href="#carousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                      style={{ backgroundColor: "crimson" }}
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                      style={{ backgroundColor: "crimson" }}
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
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
