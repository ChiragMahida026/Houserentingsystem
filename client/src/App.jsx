import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Backendlayout from "./components/Admin/Backendlayout";
import Frontend from "./components/Users/Frontend";
import Error from "./components/Error";
import Home from "./components/Home";
import Landing from "./components/Users/Landing";
import Login from "./components/Users/Login";
import CustomerRegistration from "./components/layout/CustomerRegistration";
import LandlordRegistration from "./components/layout/LandlordRegistration";
import Main_show from "./components/Users/Customer/Main_show";
import LMain_show from "./components/Users/Landlord/LMain_show";
import Cust_Landing from "./components/Users/Customer/Cust_Landing";
import Landlord_Landing from "./components/Users/Landlord/Landlord_Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* main file for change middle content */}
        <Route path="/" element={<Frontend />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="customer_reg" element={<CustomerRegistration />} />
          <Route path="landlord_reg" element={<LandlordRegistration />} />
        </Route>

        <Route path="/dashadmin" element={<Backendlayout />}>
          <Route index element={<Admin />} />
          <Route path="settings" element={<Error />} />
        </Route>

        <Route path="/dashcust" element={<Main_show />}>
          <Route index element={<Cust_Landing />} />
          <Route path="settings" element={<Error />} />
        </Route>

        <Route path="dashlandlord" element={<Main_show />}>
          <Route index element={<Landlord_Landing />} />
          <Route path="settings" element={<Error />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;