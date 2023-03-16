import React from "react";
import { Link } from "react-router-dom";
import { routPath } from "../../routes/endPoint";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sideBar">
      <ul>
        <li>Vehicle Summary</li>
        <li>Fault management</li>
        <Link to={routPath.serviceHistory}>
          <li>Service History</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
