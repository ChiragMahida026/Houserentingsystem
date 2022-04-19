import React from "react";
import { Outlet } from "react-router-dom";
import Custnav from "./Cut_nav";
import Cust_Footer from "./Cust_Footer";
import Auth from "../../../Auth";

function Main_show(props) {
  return (
    <div>
      <Auth />
      <Custnav />
      <Outlet />
      <Cust_Footer />
    </div>
  );
}

export default Main_show;
