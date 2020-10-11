import React from "react";

const NavBar = ({totalCounters}) => {
  console.log('NavBar - Rendered');

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand mb-0 h1">
        Total{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
