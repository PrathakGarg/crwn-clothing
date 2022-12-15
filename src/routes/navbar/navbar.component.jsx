import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectToggleState } from "../../store/cart/cart.selector";

import { NavbarContainer, LogoContainer, NavLinks, NavLink } from "./navbar.styles.jsx";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const toggled = useSelector(selectToggleState);

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

        {toggled && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
