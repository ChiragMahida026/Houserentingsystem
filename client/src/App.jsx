import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import CustomerRegistration from "./components/layout/CustomerRegistration";
import Login from "./components/layout/Login";
import Footer from "./components/layout/Footer";
import Error_page from "./components/layout/Error_page";
import LandlordRegistration from "./components/layout/LandlordRegistration";
import ForgetPassword from "./components/layout/ForgetPassword";
import Dash_cust from "./components/layout/Dash_cust";
import Dash_Admin from "./components/layout/Dash_Admin";
import Dash_Landlord from "./components/layout/Dash_Landlord";
import Sidebars from "./components/layout/Sidebars";

// let data = localStorage.getItem("myData");
// console.log(data);
// if (localStorage.getItem("myData") === "L") {
//   console.log("Hellos");
// }
// if (localStorage.getItem("myData") === "C") {
//   console.log("fsfsfs");
// }
const App = () => {
  return (
    //  <>
    //   {/* {localStorage.getItem("myData") === "C" ? <Navbar /> : "unauthorized"} */}
    //   {/* <Navbar /> */}
    //   <Fragment>
    //     <Navbar />
    //     <Route exact path="/" component={Landing} />

    //     <section className="container">
    //       <Switch>
    //         <Route
    //           exact
    //           path="/customer_reg"
    //           // @ts-ignore
    //           component={CustomerRegistration}
    //         />
    //         <Route exact path="/login" component={Login} />
    //         <Route
    //           exact
    //           path="/landlord_reg"
    //           component={LandlordRegistration}
    //         />
    //         <Route exact path="/error" component={Error_page} />
    //         <Route exact path="/forgetpass" component={ForgetPassword} />
    //         {/* //Dashboard */}
    //         {localStorage.getItem("myData") === "C"} ?{" "}
    //         <Route exact path="/dashadmin" component={Dash_Admin} /> :""
    //         {localStorage.getItem("myData") === "L"} ?{" "}
    //         <Route exact path="/dashadmin" component={Dash_Admin} /> :""
    //         {localStorage.getItem("myData") === "A"} ?{" "}
    //         <Route exact path="/dashlandlord" component={Dash_Landlord} /> :""
    //       </Switch>
    //     </section>
    //   </Fragment>
    //   {localStorage.getItem("myData") === "C" ? "" : <Footer />}
    // </>
    <>
      <Sidebars></Sidebars>
    </>
  );
};

export default App;
