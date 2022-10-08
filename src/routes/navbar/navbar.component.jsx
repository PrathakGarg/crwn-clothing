import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to={"/"}>
          <div className="logo">Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"shop"}>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
