import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navbar.styles.scss";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Signout
            </span>
          ) : (
            <Link className="nav-link" to={"auth"}>
              Signin
            </Link>
          )}
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
