import { Box } from "theme-ui";
import React from "react";

export function Section(props) {
  return React.createElement(Box, { ...props, as: "section" });
}
