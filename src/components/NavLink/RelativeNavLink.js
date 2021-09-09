import * as ReactRouter from "react-router-dom";
import { NavLink } from "./NavLink";

/*
* Takes the current matched url based on <Switch> matching
* and appends the "to" prop to it.
*
* This allows creating relative links based on the current
* route, instead of always needing to hardcode the full path.
* */
export function RelativeNavLink(props) {
  const match = ReactRouter.useRouteMatch()
  const relativeTo = [match.url, props.to].join('/')

  return <NavLink {...props} to={relativeTo}>{props.children}</NavLink>;
}
