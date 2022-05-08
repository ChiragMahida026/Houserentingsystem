// @ts-nocheck
import axios from "axios";
import { isEmptyObject } from "jquery";
import React, { useEffect, useState } from "react";
// import Swalfire from "sweetalert2";
import "../../layout/css/models.css";
import swal from "sweetalert";
// localhost:5000/routes/api/viewprofile?_id=624db0cbc548e7eb0852ab39
//pass x-auth-token

function Cust_Landing() {
  const [user, setUser] = useState([]);
  const [query, setquery] = useState("");

  // const [info, setInfo] = useState("");
  

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
    //  Swalfire({
    //    title: "First Login Into System!",
    //    icon: "error",
    //  });
   }

   const [Id, setID] = useState("");
   const [Des, setprc] = useState("");
   const [Img, setimage] = useState("");
   const [Img2, setimage2] = useState("");
   const [Img3, setimage3] = useState("");
   const [Address, setaddress] = useState("");
   const [Deposit, setdeposit] = useState("");
   const [House_type, sethouse_type] = useState("");
   const [Housepaper, sethousepaper] = useState("");
   const [Price, setprice] = useState("");
   const [Roomie_id, setroomie_id] = useState("");
   const [Total_roomes, settotal_roomes] = useState("");
   const [Userid, setuserid] = useState("");

   function selectuser(
     Id,
     Des,
     Img,
     Img2,
     Img3,
     Address,
     Deposit,
     House_type,
     Housepaper,
     Price,
     Roomie_id,
     Total_roomes,
     Userid
   ) {
     setID(Id);
     setprc(Des);
     setimage(Img);
     setimage2(Img2);
     setimage3(Img3);
     setaddress(Address);
     setdeposit(Deposit);
     sethouse_type(House_type);
     sethousepaper(Housepaper);
     setprice(Price);
     setroomie_id(Roomie_id);
     settotal_roomes(Total_roomes);
     setuserid(Userid);
   }

   const handleUpdate = async (e) => {
     e.preventDefault();
   };

   const showuserdetails=()=>{

var x;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  axios
    .get(
      "routes/api/viewprofile?_id=" + localStorage.getItem("Puserids"),
      config
    )
    .then((res) => {
      console.log(res.data.data);
       x = res.data.data;
     
       alert(
         "Customer Name:" +
           x.c_name +
           "\n" +
           "\n" +
           "Customer Contact:" +
           x.contact
       );
      // setInfo(res.data.data);
    });
  
   }
   
   const sendrequest=()=>{
     console.log("Hellos");
     console.log({ Id });
     console.log({ Des });
     console.log({ Userid });

     let var1=localStorage.setItem("Roomids", Id);
     let var2=localStorage.setItem("Landlordids", Userid);
     //Puserids
     
     console.log(var1);
     console.log(var2);

     if(true)
     {
        var customer_id = localStorage.getItem("Puserids");
        var house_id = localStorage.getItem("Roomids");
        var Landlord_id = localStorage.getItem("Landlordids");

        
        const newUser = {
          customer_id,
          house_id,
          Landlord_id,
        };

        console.log(newUser);
        const config = {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        };

         const body = JSON.stringify(newUser);
         console.log(body);


         const res = axios.post("/routes/api/requesthome", body, config);
    
         if (res) {
          swal({
            title: "Success",
            // text: "I will close in 2 seconds.",
            timer: 1000,
            icon: "success",
            // @ts-ignore
            button: false,
          });
          window.location.href = "dashcust/showrequest";
      }
      else{
         swal({
           title: "Somthing Wrong!",
           // text: "I will close in 2 seconds.",
           timer: 1000,
           icon: "error",
           // @ts-ignore
           button: false,
         });
      }


     }
   }
   

  return (
    <>
      <form onSubmit={(e) => handleUpdate(e)} method="post">
        <div id="cards_landscape_wrap-2">
          <div className="container">
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
                                data.Image3,
                                data.address,
                                data.deposit,
                                data.house_type,
                                data.housepaper,
                                data.price,
                                data.roomie_id,
                                data.total_roomes,
                                data.userid
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
                  <b>House Description : </b> {Des}
                  <br />
                  <b>Address : </b> {Address}
                  <br />
                  <b>Deposit : </b> {Deposit}
                  <br />
                  <b>House Type : </b> {House_type}
                  <br />
                  <b>Total roomes : </b> {Total_roomes}
                  <br />
                  {localStorage.setItem("Userids", Userid)}
                </div>
                <input
                  type="button"
                  value="Show User Details"
                  className="btn btn-dark"
                  onClick={showuserdetails}
                  style={{
                    width: "fit-content",
                    margin: "auto",
                    backgroundColor: "blueviolet",
                  }}
                />
                <br />
                <div className="modal-footer">
                  <input
                    type="button"
                    value="Rent House"
                    className="btn btn-dark"
                    id="boton2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    // style={{ display: "none" }}
                    onClick={set2}
                  />
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

          {/* Model For Rent  */}
          <div
            className="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {/* {Id} */}
                  <h2>Terms & Conditions</h2>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                    augue semper porta. Mauris massa. Vestibulum lacinia arcu
                    eget nulla. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Curabitur
                    sodales ligula in libero. Sed dignissim lacinia nunc.{" "}
                  </p>
                </div>
                <div className="modal-footer">
                  <small>
                    By clicking 'Accept' you are agreeing to our terms and
                    conditions.
                  </small>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={sendrequest}
                    // data-bs-dismiss="modal"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Cust_Landing;
