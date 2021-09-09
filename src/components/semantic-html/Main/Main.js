import { Box } from "theme-ui";
import React from "react";

export function Main(props) {
  return React.createElement(Box, { ...props, as: "main" });
}
