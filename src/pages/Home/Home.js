import React from "react";
// import Calendarr from "../../component/CalendarDate/Calendar";
// import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
// // import DateRange from "../../component/DateRange/DateRange";
// import Pagination from "../../component/pagination/Pagination";
// import RegisterUser from "../../component/RegisterUser/RegisterUser";
// import { Link } from "react-router-dom";
// import SideBar from "../../component/SideBar/SideBar";
import "./home.scss";
const Home = () => {
  return (
    <div>
      <div className="body_div">
        {/* <Link to={"/symtoms-details"}>
          <button>Symtoms</button>
        </Link>
        <button>Bulletin</button> */}
        {/* <SideBar />
        <Pagination/>
        <Calendarr/> */}
        {/* <DateRange/> */}

        {/* <RegisterUser/> */}
        <Header/>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Home;
