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
import AdminNavbar from "./components/layout/AdminNavbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Fragment>
        <Route exact path="/" component={Landing} />

        <section className="container">
          <Switch>
            <Route
              exact
              path="/customer_reg"
              // @ts-ignore
              component={CustomerRegistration}
            />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/landlord_reg"
              component={LandlordRegistration}
            />
            <Route exact path="/error" component={Error_page} />

            <Route exact path="/forgetpass" component={ForgetPassword} />
          </Switch>
        </section>
      </Fragment>
      <Footer />
    </>
  );
};

export default App;
