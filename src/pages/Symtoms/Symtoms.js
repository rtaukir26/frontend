import React from "react";
import { Link } from "react-router-dom";

const Symtoms = () => {
  return (
    <div>
      <Link to={`/symtoms-details/${2}`}>
        <button>Click</button>
      </Link>
    </div>
  );
};

export default Symtoms;
