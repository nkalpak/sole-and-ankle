import { Box } from "theme-ui";
import React from "react";

export function Aside(props) {
  return React.createElement(Box, { ...props, as: "aside" });
}
