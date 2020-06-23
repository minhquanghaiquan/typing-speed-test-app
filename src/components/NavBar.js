import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";

export default function NavBar() {
  return (
    <Navbar color="light" light expand="md" className="navbar">
      <NavbarBrand href="/">
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/53/79/high-speed-abstract-speedometer-icon-modern-logo-vector-26855379.jpg"
          className="img"
          alt="noimg"
        />
      </NavbarBrand>

      <NavLink href="/components/">
        <h2 className="title">TEST APP</h2>
      </NavLink>
    </Navbar>
  );
}
