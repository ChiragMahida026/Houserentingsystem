import React, { useState } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import swal from "sweetalert";

function Landlord_Addhouse() {
  const [fromData, setFormData] = useState({
    roomie_id: "",
    house_type: "",
    total_roomes: "",
    deposit: "",
    housepaper: "",
    address: "",
    description: "",
    price: "",
    Image1: "",
    Image2: "",
    Image3: "",
    Image4: "",
  });
  const {
    roomie_id,
    house_type,
    total_roomes,
    deposit,
    housepaper,
    address,
    description,
    price,
    Image1,
    Image2,
    Image3,
    Image4,
  } = fromData;

  const onChange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  let save = async (e) => {
    e.preventDefault();

    const newUser = {
      roomie_id,
      house_type,
      total_roomes,
      deposit,
      housepaper,
      address,
      description,
      price,
      Image1,
      Image2,
      Image3,
      Image4,
    };
    try {
      console.log(newUser);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      const body = JSON.stringify(newUser);
      console.log(body);
      const res = await axios.post("routes/api/addhouse", body, config);
      if (res.status === 200) {
        swal({
          title: "SuccessFully Added House",
          // text: "I will close in 2 seconds.",
          timer: 1000,
          icon: "success",
          // @ts-ignore
          button: false,
        });
        // window.location.href = "/dashlandlord";
      } else {
        //put alert
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <>
      <h2 style={{ marginTop: "3%", marginLeft: "45%" }}>Add House</h2>
      <form
        action="../../../../routes/api/addhouse"
        method="post"
        onSubmit={save}
        style={{ marginLeft: "30%", marginRight: "30%" }}
      >
        <div className="form-group">
          <label>Enter Roomie Id:</label>
          <input
            type="number"
            className="form-control"
            id="roomie_id"
            placeholder="Enter Roomie id"
            name="roomie_id"
            value={roomie_id}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>House Type:(1 bhk,2 bhk,3 bhk)</label>
          <input
            type="text"
            className="form-control"
            id="house_type"
            placeholder="Enter House type"
            name="house_type"
            value={house_type}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Total Roomes</label>
          <input
            type="number"
            className="form-control"
            id="total_roomes"
            placeholder="Enter Total Roomes"
            name="total_roomes"
            value={total_roomes}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>House Paper</label>
          <input
            type="file"
            className="form-control"
            id="housepaper"
            placeholder="Enter House paper"
            name="housepaper"
            value={housepaper}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>House Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter House Address"
            name="address"
            value={address}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>House Description</label>
          <input
            type="description"
            className="form-control"
            id="description"
            placeholder="Enter Description of House"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>House Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter Price of House"
            name="price"
            value={price}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Deposit Amount</label>
          <input
            type="number"
            className="form-control"
            id="deposit"
            placeholder="Enter Deposit Amount"
            name="deposit"
            value={deposit}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Image 1:</label>
          <input
            type="file"
            className="form-control"
            id="Image1"
            name="Image1"
            value={Image1}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Image 2:</label>
          <input
            type="file"
            className="form-control"
            id="Image2"
            name="Image2"
            value={Image2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Image 3:</label>
          <input
            type="file"
            className="form-control"
            id="Image3"
            name="Image3"
            value={Image3}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Image 4:</label>
          <input
            type="file"
            className="form-control"
            id="Image4"
            name="Image4"
            value={Image4}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          id="boton"
          style={{ marginBottom: "3%" }}
        />
      </form>
    </>
  );
}

export default Landlord_Addhouse;
