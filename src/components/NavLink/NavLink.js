/** @jsxImportSource theme-ui */
import { NavLink as RouterNavLink } from "react-router-dom";
import * as ThemeUI from "theme-ui";

export function NavLink(props) {
  return (
    <ThemeUI.NavLink
      {...props}
      as={RouterNavLink}
    >
      {props.children}
    </ThemeUI.NavLink>
  );
}
