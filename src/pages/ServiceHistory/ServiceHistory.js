import React from "react";
import SideBar from "../../component/SideBar/SideBar";
import "./ServiceHistory.scss";

const ServiceHistory = () => {
  return (
    <div className="dtc-scan-page">
      <div className="page-wrapper">
        <SideBar />
        <div className="body-wrapper">
          <div className="dtc-scan-container">
            <div className="dtc-contianer-sec">
              <div className="dtc-container-list">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // {/* // <div className="service_history">
    // //   ServiceHistory
    // //   <SideBar />
    // // </div> */}
  );
};

export default ServiceHistory;
