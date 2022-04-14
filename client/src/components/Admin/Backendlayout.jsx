import React from "react";
import { Outlet } from "react-router-dom";
import Cards from "./card";
function Backendlayout(props) {
  return (
    <div>
      Backendlayout
      <Cards />
      {/* <Outlet /> */}
    </div>
  );
}

export default Backendlayout;
