import React from "react";

const Header = ({ children, ...props }) => (
  <header {...props}>{children}</header>
);

export default Header;
