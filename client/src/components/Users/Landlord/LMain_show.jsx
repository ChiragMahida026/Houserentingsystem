import React from "react";
import { Outlet } from "react-router-dom";
import Landnav from "./Landlord_nav";
import Land_Footer from "./Landlord_Footer";

function LMain_show(props) {
  return (
    <div>
      <Landnav />
      <Outlet />
      <Land_Footer />
    </div>
  );
}

export default LMain_show;