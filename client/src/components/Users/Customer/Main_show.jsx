import React from "react";
import { Outlet } from "react-router-dom";
import Custnav from "./Cut_nav";
import Cust_Footer from "./Cust_Footer";

function Main_show(props) {
  return (
    <div>
      <Custnav />
      <Outlet />
      <Cust_Footer />
    </div>
  );
}

export default Main_show;