import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { DropdownContext } from "../../contexts/cart-dropdown.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navbar.styles.scss";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { toggle } = useContext(DropdownContext)

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
          <CartIcon />
        </div>

        {toggle && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
