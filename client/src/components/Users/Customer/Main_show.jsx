import React from "react";
import { Outlet } from "react-router-dom";
import Custnav from "./Cut_nav";
import CustFooter from "./Cust_Footer";
import Auth from "../../../Auth";

function Main_show(props) {
  return (
    <div>
      <Auth />
      <Custnav />
      <Outlet />
      <CustFooter />
    </div>
  );
}

export default Main_show;
