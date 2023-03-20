import React from "react";
import Login from "../../component/Login/Login";
// import RegisterUser from "../../component/RegisterUser/RegisterUser";
import "./home.scss";
const Home = () => {
  return (
    <section className="main_sec">
      <div className="body_outer_div">
        <div className="body_inner_div">
          {/* <RegisterUser /> */}
          <Login/>
        </div>
      </div>
    </section>
  );
};

export default Home;
