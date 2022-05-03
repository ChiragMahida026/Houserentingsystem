import React from "react";
import { Outlet } from "react-router-dom";
import Landnav from "./Landlord_nav";
import LandFooter from "./Landlord_Footer";
import Auth from "../../../Auth";

function LMain_show(props) {
  return (
    <div>
      <Auth />
      <Landnav />
      <Outlet />
      <LandFooter />
    </div>
  );
}

export default LMain_show;
