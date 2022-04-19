import React, { useState, useEffect, Component } from "react";
import axios from "axios";

const Auth = () => {
  async function checkcookies(e) {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    await axios.get("routes/api/logout/login").then((response) => {
      console.log(response.data.myData);
      if (response.data.myData === undefined) {
        window.location.href = "/login";
      }
    });
  }

  window.onload = checkcookies;

  return (
    <></>
    // <div>auth</div>
  );
};

export default Auth;
