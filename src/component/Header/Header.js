import React from "react";

const Header = () => {
  return (
    <section className="header_sec">
      <div className="header_inside_div">
        <div className="header_left_div">
          <span>Logo</span>
        </div>
        <div className="header_right_div">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
