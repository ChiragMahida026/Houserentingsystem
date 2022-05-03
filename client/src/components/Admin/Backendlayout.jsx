import React from "react";
// import { Outlet } from "react-router-dom";
import Auth from "../../Auth";
import Cards from "./card";

function Backendlayout(props) {
  return (
    <div>
      Backendlayout
      <Auth />
      <Cards />
      {/* <Outlet /> */}
    </div>
  );
}

export default Backendlayout;
