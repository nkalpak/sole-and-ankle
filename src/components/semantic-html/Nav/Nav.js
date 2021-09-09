import { Box } from "theme-ui";
import React from "react";

export function Nav(props) {
  return React.createElement(Box, { ...props, as: "nav" });
}
