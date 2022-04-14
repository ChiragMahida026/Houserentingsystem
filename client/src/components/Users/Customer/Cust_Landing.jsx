import axios from "axios";
import React, { useEffect, useState } from "react";

function Cust_Landing() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    axios.get("routes/api/viewhouse/all ", config).then((response) => {
      console.log(response);
      console.log(response.data.data);
      setUser(response.data.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="clearfix">
      <div className="row">
        {user.map((data) => (
          <div className="col-md-4 animated fadeIn" key={data.roomie_id}>
            <div className="card" style={{ width: "unset", margin: "11%" }}>
              <div className="card-body">
                <div className="avatar">
                  <img src={data.Image1} className="card-img-top" alt="" />
                </div>
                <h5 className="card-title">
                  {data.description + " " + data.price}
                </h5>
                <p className="card-text">
                  {data.house_type + ", " + data.total_roomes}
                  <br />
                  <span className="phone">{data.total_roomes}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cust_Landing;
