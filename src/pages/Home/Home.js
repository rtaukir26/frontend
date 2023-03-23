import React from "react";
import { Link } from "react-router-dom";

import Header from "../../component/Header/Header"

import "./home.scss";
const Home = () => {
  


  return (
    <section className="main_sec">
      <div className="body_outer_div">
        <div className="body_inner_div">Home
        <Header/>
        <Link to="/login">Back</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
