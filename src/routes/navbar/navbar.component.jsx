import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import  { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navbar.styles.scss'

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"shop"}>
            Shop
          </Link>
          <Link className="nav-link" to={"auth"}>
            Signin
          </Link>
          {/* <Link className="nav-link" to={"signup"}>
            Signup
          </Link> */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
