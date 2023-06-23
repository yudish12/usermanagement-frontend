import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <span
            style={{ color: "#010C80", fontSize: "2rem", fontWeight: "600" }}
          >
            SKIDS
          </span>
          <span
            style={{ color: "#77D4FC", fontSize: "2rem", fontWeight: "600" }}
          >
            HEALTH
          </span>
        </div>
        <div className="links">
          <Link to={"/"}>
            <h3>Home</h3>
          </Link>
          <Link to={"/add-user"}>
            <h3>Add User</h3>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
