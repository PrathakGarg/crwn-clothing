import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-dropdown.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavbarContainer, LogoContainer, NavLinks, NavLink } from "./navbar.styles.jsx";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { toggle } = useContext(CartContext)

  return (
    <Fragment>
      <NavbarContainer>
        <LogoContainer to={"/"}>
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to={"shop"}>
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Signout
            </NavLink>
          ) : (
            <NavLink to={"auth"}>
              Signin
            </NavLink>
          )}
          {/* <Link className="nav-link" to={"signup"}>
            Signup
          </Link> */}
          <CartIcon />
        </NavLinks>

        {toggle && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
