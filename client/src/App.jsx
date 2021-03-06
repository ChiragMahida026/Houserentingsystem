import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
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
import Cust_Editprofile from "./components/Users/Customer/Cust_Editprofile";
import Admin_UserInformation from "./components/Admin/Admin_UserInformation";
import Admin_houseinfo from "./components/Admin/Admin_houseinfo";
import About from "./components/layout/About";
import Addhouse from "./components/Admin/Addhouse";
import Landlord_Editprofile from "./components/Users/Landlord/Landlord_Editprofile";
import Landlord_Addhouse from "./components/Users/Landlord/Landlord_Addhouse";
import Landlord_showhouse from "./components/Users/Landlord/Landlord_showhouse";
import Landlord_Showrequest from "./components/Users/Landlord/Landlord_Showrequest";
import ForgetPassword from "./components/layout/ForgetPassword";
import ChangePassword from "./components/layout/ChangePassword";
import Cust_Showrequest from "./components/Users/Customer/Cust_Showrequest";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* main file for change middle content */}
        <Route path="/" element={<Frontend />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="forgetpass" element={<ForgetPassword />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="about" element={<About />} />
          <Route path="customer_reg" element={<CustomerRegistration />} />
          <Route path="landlord_reg" element={<LandlordRegistration />} />
        </Route>

        <Route path="/dashadmin" element={<Backendlayout />}>
          <Route index element={<Admin />} />
          <Route path="userinformation" element={<Admin_UserInformation />} />
          <Route path="houseinformation" element={<Admin_houseinfo />} />
          <Route path="Addhouse" element={<Addhouse />} />
          <Route path="allrequest" element={<Admin_UserInformation />} />
          <Route path="settings" element={<Error />} />
        </Route>

        <Route path="/dashcust" element={<Main_show />}>
          <Route index element={<Cust_Landing />} />
          <Route path="/dashcust/editprofile" element={<Cust_Editprofile />} />
          <Route path="showrequest" element={<Cust_Showrequest />} />
          {/* <Route path="settings" element={<Cust_Editprofile />} /> */}
        </Route>

        <Route path="/dashlandlord" element={<LMain_show />}>
          <Route index element={<Landlord_Landing />} />
          <Route
            path="/dashlandlord/editprofile"
            element={<Landlord_Editprofile />}
          />
          <Route
            path="/dashlandlord/addhouse"
            element={<Landlord_Addhouse />}
          />
          <Route path="showrequest" element={<Landlord_Showrequest />} />
          <Route
            path="/dashlandlord/showhouse"
            element={<Landlord_showhouse />}
          />
          <Route path="settings" element={<Error />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
